# 🐳 Desafio 2 - Cluster Docker Swarm com Vagrant

## 📋 Descrição do Projeto
Este projeto implementa um cluster Docker Swarm local utilizando máquinas virtuais gerenciadas pelo Vagrant, conforme desafio proposto na Formação Docker Fundamentals da Digital Innovation One.

## 🎯 Objetivo
Criar um cluster Docker Swarm com 4 máquinas virtuais:
- 1 nó manager (master)
- 3 nós workers (node01, node02, node03)

## 🏗 Arquitetura do Cluster
```
10.10.10.100 - master (Manager Node)
10.10.10.101 - node01 (Worker Node)
10.10.10.102 - node02 (Worker Node)
10.10.10.103 - node03 (Worker Node)
```

## 🛠 Tecnologias Utilizadas
- **Vagrant** - Provisionamento de VMs
- **VirtualBox** - Virtualização
- **Docker** - Containerização
- **Docker Swarm** - Orquestração
- **Ubuntu 22.04** - Sistema Operacional

## 📁 Estrutura do Projeto
```
desafio-2/
├── Vagrantfile
├── scripts/
│ ├── docker.sh
│ ├── master.sh
│ └── worker.sh
└── README.md
```


## 🚀 Como Executar

### Pré-requisitos
- Vagrant instalado
- VirtualBox instalado
- Git para clonar o repositório

### Passos para execução

1. **Clone o repositório**
```bash
git clone https://github.com/dev-juan-ibanez/formacao-docker-fundamentals-dio.git
```
2. Depois acesse:
```bash
cd formacao-docker-fundamentals-dio/desafio-2
```

3. Inicie as máquinas virtuais

```bash
vagrant up
```
4. Acesse o nó master
```bash
vagrant ssh master
```
5. Verifique o cluster Swarm
```bash
docker node ls
```

### 📋 Comandos Úteis
```bash
# Ver status das VMs
vagrant status
````
```bash
# Acessar nós específicos
vagrant ssh master
vagrant ssh node01
vagrant ssh node02
vagrant ssh node03
```
```bash
# Ver nodes do swarm (no master)
docker node ls
```
```bash
# Recriar o cluster
vagrant destroy -f && vagrant up
```
```bash
# Provisionar apenas os workers
vagrant provision node01 node02 node03
```

### 🔧 Scripts de Provisionamento
docker.sh: Instala Docker e Docker Compose em todas as máquinas

master.sh: Configura o nó master e inicializa o Swarm

worker.sh: Configura os nós workers para se juntarem ao cluster

### 🐳 Comandos Docker Swarm
```bash
# No nó master, criar um serviço
docker service create --name web --replicas 3 -p 80:80 nginx
```
```bash
# Escalar serviço
docker service scale web=5
```
```bash
# Listar serviços
docker service ls
```
```bash
# Ver logs do serviço
docker service logs web
````
```bash
# Remover serviço
docker service rm web
```

### 🎯 Resultado Esperado
Após executar vagrant up, você terá um cluster Docker Swarm totalmente funcional com:
- ✅ 1 nó manager;
- ✅ 3 nós workers;
- ✅ Docker instalado em todos os nós;
- ✅ Rede privada configurada;
- ✅ Cluster Swarm inicializado.

### ⚠️ Solução de Problemas
Se os workers não se conectarem:

```bash
# Execute o provisionamento novamente nos workers
vagrant provision node01 node02 node03
```
Se o token expirar:

```bash
# No master, gere novo token
vagrant ssh master -c "docker swarm join-token worker"
```
Nos workers, execute o novo comando

### 👨‍💻 Autor
Desenvolvido como parte da Formação Docker Fundamentals da Digital Innovation One por Juan.
