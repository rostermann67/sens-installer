SENS INSTALLER — PoC 2C

CORREÇÃO IMPORTANTE:
No ESP Web Tools, "new_install_prompt_erase": false NÃO significa preservar.
A documentação informa que uma nova instalação apaga os dados por padrão.
Para oferecer ao usuário a escolha de apagar ou não, deve-se usar
"new_install_prompt_erase": true e deixar "Erase device" DESMARCADO.

Esta recuperação grava:
0x1000  bootloader
0x8000  tabela de partições
0xE000  boot_app0/OTA inicial
0x10000 aplicação

Não grava diretamente:
0x9000  NVS
0x290000 SPIFFS

ATENÇÃO:
Como a PoC 2 anterior pode ter executado o apagamento padrão antes de gravar
somente a aplicação, o estado persistente anterior (Seq 383/buffer) pode já
ter sido perdido. Esta PoC 2C busca primeiro recuperar um boot válido.
