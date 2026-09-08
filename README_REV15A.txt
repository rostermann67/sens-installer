SENS Installer — frontend Rev.15A

IMPORTANTE: este frontend exige firmware Rev.15A compilado.
Nao publicar usando os binarios Rev.15 anteriores.

Mudancas:
- FULL BASIC/ADV/GEN/CORR enviados em chunks UTF-8 <=72 bytes.
- chunks apenas fazem STAGE em RAM.
- COMMIT unico grava NVS.
- firmware recarrega NVS e devolve um unico snapshot logico fragmentado em frames Improv.
- Installer reconstrói e compara B/A/G0/G1/C0/C1 com a configuracao desejada.
- sem FULL_STATUS adicional apos COMMIT.
