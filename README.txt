SENS INSTALLER V2.5 — Rev.11 IMPROV IDENTITY
PoC de validacao intermediaria.

- Restaura Improv automatico pos-instalacao (wait 20 s), caminho ja validado.
- Rev.11 aceita Device Name e Hostname do protocolo Improv.
- Device Name -> Nome SENS.
- Hostname -> Serial SENS.
- Mantem trava de transmissao sem identidade e Multi-Batch ordenado.

IMPORTANTE: nesta V2.5 os campos guardados na pagina ainda NAO sao enviados automaticamente
para a janela nativa do ESP Web Tools. Esta rodada valida a Rev.11 e o retorno do Wi-Fi automatico.
A integracao final usara o SDK standalone: setDeviceName -> setHostname -> scan -> provision.
