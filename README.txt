SENS INSTALLER V2.4 — SAFE WIZARD
Firmware: Rev.10 SAFE CONFIG + ORDERED BATCH

FLUXO:
1. Nome + Serial.
2. Instalar firmware.
3. Gravar Nome + Serial no ESP32/NVS.
4. Configurar Wi-Fi por Improv Serial — ULTIMA ETAPA.

Mudanca-chave:
- new_install_improv_wait_time = 0 nos manifests, evitando o prompt Wi-Fi automatico logo apos a gravacao.
- O Wi-Fi e iniciado explicitamente na Etapa 4 pelo SDK oficial Improv Serial.
- Rev.10 bloqueia transmissao cientifica sem identidade Web/NVS.
- Rev.10 corrige Multi-Batch: historicos primeiro, atual por ultimo.

TESTE RECOMENDADO:
A) DO ZERO com Nome diferente e Serial SENS-003.
B) Depois de instalar, espere antes da Etapa 3 e confirme: nenhuma nova linha do SENS-003.
C) Grave Nome + Serial.
D) Antes do Wi-Fi, confirme que ainda nao transmite.
E) Configure Wi-Fi na Etapa 4.
F) Confira DADOS_GERAIS: novo nome + SENS-003 e Seq crescente.
G) RESET simples: identidade/Wi-Fi/Epoch/Seq devem persistir.

Observacao:
- Esta versao deve ser validada antes de congelamento.
