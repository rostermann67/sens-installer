SENS INSTALLER V2.8 — CONFIGURAÇÃO COMPLETA
Firmware Rev.13.
Base serial: V2.7.1 SET -> READBACK.
Inclui T6613 completo, intervalos, mapa de pinos, 8 genéricos e 16 correções y=a*x+b com ID Aferição.
Rev.13/V2.8 é candidata experimental até validação de bancada.

V2.8.1 — 2 GENÉRICOS + READBACK TOLERANTE
- Firmware Rev.13 inalterado.
- Interface reduzida de 8 para 2 slots genéricos/industriais.
- A confirmação de Advanced/Genéricos/Correções deixa de comparar a string literal.
- Readback agora compara campo a campo; números aceitam diferença apenas de formatação
  (ex.: 3.3 = 3.300, 450 = 450.0000).
- Isso corrige o falso erro "Genérico 1: readback diferente".
