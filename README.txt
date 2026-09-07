SENS INSTALLER V2.9.1 — IDENTIDADE ATÔMICA
Firmware: SENS V2.2.1 RC5B8 Rev.14 IDENTIDADE ATOMICA

MUDANÇA PRINCIPAL
Nome + Serial/ID SENS não são mais gravados por dois comandos Improv independentes.
O Installer usa o protocolo privado SENS:
- 0x29 SET IDENTITY: envia Nome|Serial em uma única operação.
- Firmware grava ambos juntos via deviceConfigSaveIdentity().
- A resposta do próprio SET devolve Nome + Serial efetivamente ativos.
- 0x28 GET IDENTITY é usado somente como leitura de recuperação caso o ACK se perca.

OBJETIVO
Eliminar o estado parcial observado nos testes anteriores, em que o Nome novo
era aceito mas a leitura do Serial ainda retornava o fallback SENS-003.

PRESERVADO
- Rev.14 mantém a linhagem Rev.13 para runtime completo.
- 2 genéricos na interface do Installer.
- 2 correções metrológicas na interface do Installer.
- configuração avançada, aferição, Wi-Fi/Improv, Epoch/Seq/ACK/Buffer.
- boot_app0 conhecido e validado da linhagem anterior.

TESTE-ALVO
DO ZERO com Nome/Serial novos. A Etapa 3 deve mostrar a identidade confirmada
sem ciclos separados de Nome e ID e seguir diretamente ao runtime.
