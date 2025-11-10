#!/bin/bash

echo "=== AGUARDANDO TOKEN DO SWARM ==="

# Aguardar o master gerar o token
sleep 30

# Verificar se o arquivo de token existe
if [ -f /vagrant/scripts/join-token.sh ]; then
    echo "=== JUNTANDO-SE AO SWARM CLUSTER ==="
    sudo bash /vagrant/scripts/join-token.sh
    echo "=== WORKER ADICIONADO AO SWARM ==="
else
    echo "ERRO: Arquivo de token não encontrado!"
    echo "Execute o master primeiro e depois provisione os workers novamente:"
    echo "vagrant provision node01 node02 node03"
fi