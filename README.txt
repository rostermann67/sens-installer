SENS INSTALLER — PoC 2B

Motivo:
A PoC 2 gravou somente APP0 em 0x10000. O ESP32 passou a registrar:
"invalid header: 0xffffffff", indicando que o bootloader não estava
selecionando uma aplicação válida.

Correção desta PoC:
- 0xE000: bloco boot_app0/OTADATA extraído da imagem merged original
- 0x10000: aplicação SENS original

Áreas deliberadamente NÃO gravadas:
- NVS:     0x9000
- SPIFFS:  0x290000

Arquivo boot_app0:
SENS_ESP32_DEVKIT_V1_BOOT_APP0.bin
Tamanho: 8192 bytes
SHA-256: f94c5d786a7a8fab06ac5d10e33bf37711a6697636dc037559ea19cc410a17f0

Arquivo aplicação:
SENS_ESP32_DEVKIT_V1_APP.bin
Tamanho: 1135312 bytes
SHA-256: ce88742fe0ac4a642f4b4bbf44843a552a6f423cd9dbba2632efe4319aae3743

Objetivo experimental:
Recuperar o SENS-003 e verificar se o estado persistente anterior,
especialmente Seq 383, sobreviveu.
