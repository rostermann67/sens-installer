
const IMPROV_HEADER = [73,77,80,82,79,86,1]; // IMPROV + v1
const TYPE_STATE=1, TYPE_ERROR=2, TYPE_RPC=3, TYPE_RPC_RESULT=4;
const CMD_WIFI=1, CMD_STATE=2, CMD_INFO=3, CMD_SCAN=4, CMD_HOSTNAME=5, CMD_DEVICE_NAME=6;

export class SensImprov {
  constructor(port, log=()=>{}) {
    this.port=port; this.log=log; this.reader=null; this.writer=null;
    this.buf=[]; this.pending=null; this.state=undefined; this.running=false;
  }
  async open() {
    await this.port.open({baudRate:115200});
    this.reader=this.port.readable.getReader();
    this.writer=this.port.writable.getWriter();
    this.running=true; this.readLoop();
  }
  async close() {
    this.running=false;
    try{await this.reader?.cancel();}catch(e){}
    try{this.reader?.releaseLock();}catch(e){}
    try{this.writer?.releaseLock();}catch(e){}
    try{await this.port.close();}catch(e){}
  }
  checksum(arr){return arr.reduce((a,b)=>(a+b)&255,0);}
  async send(type,data=[]) {
    const arr=[...IMPROV_HEADER,type,data.length,...data];
    arr.push(this.checksum(arr));
    await this.writer.write(new Uint8Array(arr));
  }
  async rpc(command,data=[],timeout=12000,multi=false) {
    if(this.pending) throw new Error("Comando Improv anterior ainda em andamento.");
    return await new Promise(async (resolve,reject)=>{
      const timer=setTimeout(()=>{
        this.pending=null; reject(new Error("Tempo esgotado aguardando resposta do ESP32."));
      },timeout);
      this.pending={command,resolve,reject,timer,multi,results:[]};
      try{await this.send(TYPE_RPC,[command,data.length,...data]);}
      catch(e){clearTimeout(timer);this.pending=null;reject(e);}
    });
  }
  decodeStrings(data) {
    if(data.length<2) return [];
    let pos=2, out=[];
    while(pos<data.length){
      const n=data[pos++]; if(pos+n>data.length) break;
      out.push(new TextDecoder().decode(new Uint8Array(data.slice(pos,pos+n))));
      pos+=n;
    }
    return out;
  }
  handleFrame(frame) {
    if(frame.length<10) return;
    const type=frame[7], len=frame[8], data=frame.slice(9,9+len);
    const got=frame[9+len], calc=this.checksum(frame.slice(0,9+len));
    if(got!==calc) return;
    if(type===TYPE_STATE){this.state=data[0]; return;}
    if(type===TYPE_ERROR){
      const code=data[0];
      if(code && this.pending){
        clearTimeout(this.pending.timer);
        const p=this.pending; this.pending=null;
        p.reject(new Error("ESP32 respondeu erro Improv 0x"+code.toString(16).padStart(2,"0")));
      }
      return;
    }
    if(type===TYPE_RPC_RESULT && this.pending){
      const cmd=data[0]; if(cmd!==this.pending.command) return;
      const strings=this.decodeStrings(data);
      if(this.pending.multi){
        if(strings.length===0){
          clearTimeout(this.pending.timer);
          const p=this.pending; this.pending=null; p.resolve(p.results);
        }else{
          this.pending.results.push(strings);
        }
      }else{
        clearTimeout(this.pending.timer);
        const p=this.pending; this.pending=null; p.resolve(strings);
      }
    }
  }
  async readLoop() {
    try{
      while(this.running){
        const {value,done}=await this.reader.read(); if(done) break;
        if(!value) continue;
        for(const b of value){
          this.buf.push(b);
          // Resync to "IMPROV"
          while(this.buf.length>=6 && String.fromCharCode(...this.buf.slice(0,6))!=="IMPROV") this.buf.shift();
          if(this.buf.length>=9){
            const total=10+this.buf[8];
            if(this.buf.length>=total){
              const f=this.buf.splice(0,total); this.handleFrame(f);
            }
          }
        }
      }
    }catch(e){this.log("Serial encerrada: "+e);}
  }
  async initialize() {
    await this.rpc(CMD_STATE,[],5000).catch(()=>{});
    return await this.rpc(CMD_INFO,[],8000);
  }
  async setDeviceName(name) {
    return (await this.rpc(CMD_DEVICE_NAME,[...new TextEncoder().encode(name)],10000))[0]||"";
  }
  async setHostname(host) {
    return (await this.rpc(CMD_HOSTNAME,[...new TextEncoder().encode(host)],10000))[0]||"";
  }
  async getDeviceName(){return (await this.rpc(CMD_DEVICE_NAME,[],8000))[0]||"";}
  async getHostname(){return (await this.rpc(CMD_HOSTNAME,[],8000))[0]||"";}
  async scan() {
    const rows=await this.rpc(CMD_SCAN,[],30000,true);
    return rows.map(r=>({name:r[0]||"",rssi:parseInt(r[1]||"-999"),secured:(r[2]||"YES")!=="NO"}))
               .filter(x=>x.name)
               .sort((a,b)=>b.rssi-a.rssi);
  }
  async provision(ssid,password) {
    const e=new TextEncoder(), s=[...e.encode(ssid)], p=[...e.encode(password)];
    return await this.rpc(CMD_WIFI,[s.length,...s,p.length,...p],35000);
  }
}
