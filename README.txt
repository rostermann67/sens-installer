SENS INSTALLER V1 — GitHub Pages
Firmware: 2.2.1-RC5B8 Rev.06E MULTI-BATCH RESUMO
Alvo: ESP32 DevKit V1

ARQUIVOS PARA O GITHUB
- index.html
- manifest-preservar.json
- manifest-do-zero.json
- firmware/*

1) ATUALIZAR SENS — PRESERVAR DADOS
Manifesto: manifest-preservar.json
Grava:
  0x1000  bootloader
  0x8000  tabela de partições
  0xE000  boot_app0
  0x10000 aplicação
Não grava diretamente:
  0x9000   NVS
  0x290000 LittleFS/SPIFFS (partição de dados)
O manifesto usa new_install_prompt_erase=true.
Na tela do ESP Web Tools, DEIXAR 'Erase device' DESMARCADO.

Teste obrigatório após atualização:
- Epoch igual ao anterior;
- Seq continua;
- buffer persistente continua.

2) INSTALAR SENS DO ZERO
Manifesto: manifest-do-zero.json
Usa a imagem merged da compilação atual em offset 0.
O ESP Web Tools usa o comportamento padrão de nova instalação, que apaga os dados antes de instalar.
Resultado esperado:
- dados persistentes antigos apagados;
- novo Epoch no primeiro boot;
- Seq reinicia;
- buffer vazio.

IMPORTANTE
O modo DO ZERO é destrutivo.
Primeiro teste recomendado: usar um ESP32 de teste ou um equipamento cuja identidade possa ser recriada.
