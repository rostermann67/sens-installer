SENS Installer V2.10.2 — Rev.15A

- Frontend identificado como V2.10.2.
- Formulário inicial neutro: não importa localStorage da V2.10/V2.10.1.
- Manifests exclusivos: manifest-v2102-do-zero.json e manifest-v2102-preservar.json.
- DO ZERO usa SENS_MERGED_REV15A.bin.
- PRESERVAR usa bootloader e partition table da própria compilação Rev.15A + SENS_APP_REV15A.bin.
- BASIC/ADV/GEN/CORR são preparados em RAM.
- COMMIT único grava NVS.
- Firmware recarrega NVS e devolve snapshot lógico para confirmação.
