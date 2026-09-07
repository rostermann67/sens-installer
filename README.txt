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

V2.8.2 — GENERICOS OFF INTELIGENTE
- Firmware Rev.13 inalterado.
- Corrige falso erro de readback em slots genéricos desativados.
- Com en=0, a confirmação exige apenas en=0.
- Com en=1, todos os campos continuam sendo comparados.

V2.8.3 — READBACK INTELIGENTE / FILA SELETIVA
- Firmware Rev.13 inalterado.
- Nome e Serial: GET antes de SET; se já estavam gravados, não retransmite.
- Progresso de Serial mostra ciclo 1/3, 2/3, 3/3.
- Runtime básico usa comparação semântica campo a campo.
- Advanced/Genéricos/Correções também usam GET antes de SET.
- Genéricos OFF e sem configuração são pulados.
- Correções OFF e totalmente vazias são puladas.
- Até 16 correções continuam disponíveis; só as preenchidas trafegam pela serial.

V2.8.4 — SEM READBACK REDUNDANTE DE IDENTIDADE
- Firmware Rev.13 inalterado.
- Corrige parada logo depois de "Serial / ID SENS confirmado".
- A V2.8.3 confirmava Nome e Serial dentro de confirmByReadback(), mas depois
  fazia MAIS dois GETs (Nome e Serial) antes do runtime.
- Em algumas placas/instantes esses GETs extras travavam/expiravam, apesar da
  identidade já estar comprovadamente gravada.
- Agora o resultado já confirmado é reutilizado e o fluxo segue imediatamente
  para o runtime básico.

V2.8.5 — 2 CORRECOES METROLOGICAS
- Firmware Rev.13 inalterado.
- Installer reduzido de 16 para 2 posições de correção metrológica.
- Cada posição continua vinculada a Sensor ID + Grandeza.
- Mantidos: A, B, ID da Aferição, Ativa e Verificada.
- Linhas OFF/vazias continuam sem transmissão.
- Redução importante do número potencial de RPCs na Etapa 3.
