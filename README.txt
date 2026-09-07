SENS INSTALLER V2.7 — RUNTIME CONFIG FASE 1
Firmware Rev.12C.
Grava e confirma em NVS: Projeto, Local, Papel, intervalo, sync Platform,
DHT22, DS18B20 0/1/2/AUTO, BMP180, BME280, BME680, BMP388, BH1750,
APDS9960, Termopar K, T6613 e GPS. Nome/Serial via Improv padrão.
Wi-Fi e Monitor SENS preservados.

V2.7.1 — SERIAL READBACK ROBUSTNESS
- Base: V2.7 + firmware Rev.12C, sem alterar BINs.
- DTR/RTS são desativados logo após abrir a Web Serial.
- Espera inicial ampliada.
- Nome e Serial: SET -> pausa -> GET. Se a NVS já estiver correta, considera sucesso mesmo com ACK perdido.
- Runtime Config: SET -> pausa -> GET -> comparação exata. Só regrava se ainda não conferir.
- Timeouts de leitura ampliados.
- Wi-Fi, scan, Monitor SENS e lógica científica preservados.
