SENS INSTALLER V2.6 — PRECONFIG + IMPROV
Firmware: Rev.11 IMPROV IDENTITY

Fluxo:
1. Nome + Serial ficam salvos no navegador.
2. Instala Rev.11 (DO ZERO ou PRESERVAR).
3. "GRAVAR CONFIGURACAO E CONTINUAR":
   - abre Web Serial;
   - envia Device Name = Nome;
   - envia Hostname = Serial;
   - le os dois de volta e confirma;
   - na MESMA sessao faz scan de Wi-Fi.
4. Usuario escolhe rede/senha.
5. provision() grava Wi-Fi e equipamento entra em operacao.

Decisoes:
- new_install_improv_wait_time = 0: o ESP Web Tools NAO abre Wi-Fi automaticamente.
- O Installer controla a etapa de identidade antes da rede.
- Cliente Improv minimo esta incluido localmente em sens-improv.js; nao depende do SDK Improv externo em runtime.
- ESP Web Tools continua sendo usado somente para flash.
- Branding institucional neutro.

Seguranca Rev.11:
- sem Nome + Serial persistidos, transmissao cientifica permanece bloqueada.
- Multi-Batch ordenado da Rev.10 permanece.

Teste recomendado DO ZERO:
A. Salvar Nome diferente + SENS-003.
B. Instalar.
C. Antes da Etapa 3, confirmar zero novas linhas.
D. Etapa 3: confirmar Nome e Serial gravados/lidos.
E. Ver se scan lista redes.
F. Conectar Wi-Fi.
G. Confirmar DADOS_GERAIS com novo Nome, SENS-003, novo Epoch e Seq crescente.

V2.6.1 — HANDSHAKE FIX
- Corrige parser do pacote serial para considerar o LF (0x0A) final.
- Corrige initialize(): REQUEST_CURRENT_STATE aguarda CURRENT_STATE; nao exige RPC_RESULT
  quando o equipamento ainda nao esta provisionado.
- Firmware Rev.11 e binarios permanecem IDENTICOS aos da V2.6.

V2.6.2 — SERIAL RETRY / READBACK
- Mantém o handshake corrigido da V2.6.1.
- Após gravar Nome, aguarda 1,8 s antes do Serial.
- Serial/ID SENS: até 3 tentativas.
- Se o setter salvar mas não devolver ACK, a leitura de volta confirma o valor.
- Firmware Rev.11 e binários permanecem inalterados.

V2.6.3 — IMPROV OFFICIAL FRAMING
- Alinha o cliente serial ao enquadramento usado pelo SDK oficial Improv Serial.
- TX agora envia LF (0x0A) depois do checksum.
- RX processa o frame assim que chega o checksum; LF e tratado apenas como separador.
- Mantem handshake corrigido, retries/readback da V2.6.2.
- Firmware Rev.11 e todos os BIN permanecem IDENTICOS.

V2.6.4 — SCAN RESYNC
- Mantem integralmente o fluxo validado da V2.6.3.
- Nao altera firmware Rev.11 nem binarios.
- Alteracao isolada no scan Wi-Fi:
  * espera curta antes da primeira varredura;
  * ate 3 tentativas;
  * ressincroniza o estado Improv entre tentativas;
  * mantem SSID manual como fallback.

V2.6.5 — SCAN UI FIX
- Corrige excecao JavaScript da V2.6.4: tentativa de escrever textContent em elemento inexistente.
- Callback de progresso do scan agora e seguro e nao interrompe a varredura.
- Mantem Rev.11, BINs, identidade, provisionamento manual e scanReliable inalterados.

V2.6.7 — ROBUSTEZ SEM REGRESSAO
- Retorna integralmente ao fluxo de identidade da V2.6.5, ja validado em campo.
- Remove a nova camada setAndConfirm da V2.6.6, que introduziu regressao no Serial / ID SENS.
- Mantem scan automatico validado.
- Adiciona robustez apenas ao Wi-Fi: ate 3 tentativas automaticas com espera e rechecagem de estado.
- Firmware Rev.11 e todos os BIN permanecem IDENTICOS.
