#!/bin/bash

echo "=== CONFIGURANDO MASTER NODE ==="

# Inicializar o Docker Swarm
sudo docker swarm init --advertise-addr=10.10.10.100

# Criar script para workers se juntarem ao cluster
sudo docker swarm join-token worker | grep "docker swarm join" > /vagrant/scripts/join-token.sh
sudo chmod +x /vagrant/scripts/join-token.sh

echo "=== SWARM INICIALIZADO ==="
echo "Token para workers salvo em /vagrant/scripts/join-token.sh"

# Exibir informações do swarm
echo "=== INFORMAÇÕES DO SWARM ==="
sudo docker node ls