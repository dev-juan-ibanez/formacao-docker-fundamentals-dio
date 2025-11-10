# 🐳 Desafio 1 - Docker Fundamentals DIO

## 📋 Descrição do Projeto
Este projeto implementa uma aplicação web completa utilizando Docker Compose com servidor Apache, conforme desafio proposto na Formação Docker Fundamentals da Digital Innovation One.

## 🎯 Objetivo
Criar e executar uma aplicação HTML em um Container Apache usando Docker Compose, demonstrando conhecimentos em containerização e orquestração.

## 🛠 Tecnologias Utilizadas
- **Docker** - Containerização;
- **Docker Compose** - Orquestração;
- **Apache HTTP Server** - Servidor Web;
- **HTML5, CSS3, JavaScript** - Frontend;
- **Git & GitHub** - Versionamento.

## 📁 Estrutura do Projeto
```
desafio-1/
├── docker-compose.yml
├── Dockerfile
├── src/
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md
```


## 🚀 Como Executar

### Pré-requisitos
- Docker instalado
- Docker Compose instalado
- Git para clonar o repositório

### Passos para execução

1. **Clone o repositório**
```bash
git clone https://github.com/dev-juan-ibanez/formacao-docker-fundamentals-dio.git
```

2. Depois acesse a pasta desafio-1
```bash
cd formacao-docker-fundamentals-dio/desafio-1
```

3. Execute a aplicação com Docker Compose

```bash
docker-compose up -d
```
4. Acesse a aplicação
Abra o navegador e acesse: http://localhost:8080


5. Para parar a aplicação

```bash
docker-compose down
```

### 📦 Comandos Úteis

```bash
# Build e execução
docker-compose up -d --build
```

```bash
# Ver logs
docker-compose logs -f
```
```bash
# Parar serviços
docker-compose down
```
```bash
# Ver containers em execução
docker-compose ps
```

### 🌐 Funcionalidades da Aplicação:
- Página web responsiva e estilizada;
- Interatividade com JavaScript;
- Contador de cliques em tempo real;
- Design moderno com gradientes e animações;
- Totalmente containerizada.

### 📝 Notas
A aplicação utiliza bind mounts para desenvolvimento, permitindo alterações em tempo real

O Apache está configurado para servir arquivos estáticos

A rede bridge isolada garante a comunicação entre serviços

### 👨‍💻 Autor
Desenvolvido como parte da Formação Docker Fundamentals da Digital Innovation One por Juan Ibanez.