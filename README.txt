SENS INSTALLER V2.2 — CONFIG WEB
Firmware: 2.2.1-RC5B8 Rev.08 CONFIG WEB

PoC: configuração persistente de Nome + Serial via página HTTP local do ESP32.

TESTE
1. Publicar todo este pacote no GitHub Pages.
2. INSTALAR DO ZERO.
3. Configurar Wi-Fi na tela Improv.
4. Abrir Logs e localizar: SENS CONFIG WEB: http://<IP>/
5. No computador conectado à mesma rede Wi-Fi, abrir esse endereço.
6. Alterar Nome e Serial; salvar.
7. ESP reinicia.
8. Confirmar novos Nome/Serial na SENS Platform.
9. Apertar RESET e confirmar que permanecem.
10. Nesta PoC, trocar Nome/Serial não gera novo Epoch automaticamente.

A Rev.07 + Installer V2.1 permanecem congelados como marco do provisionamento Wi-Fi.
