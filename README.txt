SENS INSTALLER V2.10 — CONFIGURAÇÃO ATÔMICA COMPLETA
Firmware: 2.2.1-RC5B8 Rev.15 CONFIG ATOMICA COMPLETA

FLUXO
1. Pré-configuração na página.
2. Instalação DO ZERO ou PRESERVAR.
3. Identidade atômica Nome + Serial.
4. Transação completa Rev.15:
   BEGIN
   BASIC
   ADVANCED
   GENERIC 1
   GENERIC 2
   CORRECTION 1
   CORRECTION 2
   COMMIT
   STATUS
5. O Installer só considera sucesso quando:
   valid=1
   schema=15
   token confere
   fingerprint existe
6. Wi-Fi.
7. Monitor serial.

RPCs Rev.15 confirmados a partir do ELF/DWARF compilado:
0x2A FULL_BEGIN
0x2B FULL_BASIC
0x2C FULL_ADV
0x2D FULL_GENERIC
0x2E FULL_CORR
0x2F FULL_COMMIT
0x30 FULL_STATUS

OBJETIVO
Eliminar as dezenas de SET/GET/retry da linhagem V2.9.x.
A configuração é preparada em staging e somente efetivada no COMMIT.
