SENS INSTALLER — PoC 2

Layout confirmado pela tabela de partições da compilação:
NVS       0x009000  tamanho 0x005000
OTADATA   0x00E000  tamanho 0x002000
APP0      0x010000  tamanho 0x140000
APP1      0x150000  tamanho 0x140000
SPIFFS    0x290000  tamanho 0x160000
COREDUMP  0x3F0000  tamanho 0x010000

ATUALIZAR/PRESERVAR:
firmware/SENS_ESP32_DEVKIT_V1_UPDATE.bin
offset 0x10000
tamanho 1135312
SHA-256 ce88742fe0ac4a642f4b4bbf44843a552a6f423cd9dbba2632efe4319aae3743

DO ZERO:
firmware/SENS_ESP32_DEVKIT_V1_FULL.bin
offset 0x00000
tamanho 4194304
SHA-256 b9f20a4eba16e3ae8ed38f648b2e29ce5a49219cdfa73c65cc9f9b911c1f0507

IMPORTANTE:
A opção PRESERVAR evita gravar NVS/SPIFFS, mas a preservação real de seq/buffer
deve ser comprovada experimentalmente no firmware SENS.
