# 🌟💻 TCC-EBAC-QE 💻🌟

Projeto que verifica a Qualidade da aplicação EBAC STORE
envolvendo testes automatizados de UI, mobile e API.

## Índice

- [Visão Geral](#visao-geral)
  - [Introdução](#introdução)
  - [Estratégia de testes](#estratégia-de-testes)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Como executar o projeto](#-como-executar-o-projeto)
- [Estrutura do projeto](#estrutura-do-projeto)
  - [Requisitos](#requisitos)
  - [Estratégia de testes](#estratégia-de-testes)
  - [Arquitetura](#arquitetura)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [Dev dependencies](#dev-dependencies)
- [Local settings ](#local-settings)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
  - [Database config](#database-config)
  - [Start server](#start-server)
- [Endpoints](#endpoints)
- [The process](#the-process)
  - [What I learned](#what-i-learned)
    - [Session payload](#session-payload)
    - [Update password](#update-password)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)
  - [Author](#author)

---

## 👁️ Visão Geral

### 🎬 Introdução

O trabalho executa baterias de testes na aplicação “Ebac shop Loja de teste”
na aplicação em versão mobile Android, Web em três navegadores, API e teste não funcional de Performance.

No caso dos testes de Interface, priorizou-se a metodologia de Desenvolvimento baseado no Comportamento (BDD).
Desta forma pensa-se primeiro como o usuário interage com a aplicação e a partir disto
testa-se o que é mais importante para otimizar sua experiência ao interagir com a aplicação.

Além disso, os testes de performance usando K6
para simular um teste de carga a fim de verificar a resiliência da API em determinado período de tempo.

Salienta-se que foi preparado um fluxo de CI/CD baseado em Github Actions para que ao serem feitas atualizações
na aplicação, novas funcionalidades não alterem o funcionamento daquelas existentes em Produção.

---

### Estratégias de testes

### 📚 Tecnologias utilizadas

- [Cypress](https://docs.cypress.io/): É uma biblioteca de testes de interface de ponta a ponta;
- [Cucumber](https://cucumber.io/): Ferramenta utilizada em conjunto com o Cypress para executar testes na metodologia BDD(Behaviour Driven Development);
- [Supertest](https://www.npmjs.com/package/supertest): Biblioteca para efetuar testes na API;
- [Mocha](https://mochajs.org/): Framework de testes usado nos testes de API.
- [Chai](https://mochajs.org/): Usado para auxiliar os testes de Performace.
- [K6](https://k6.io/docs/): Este é o framework para testes de performance de API.
- [Grafana](https://grafana.com/): Plataforma para visualizar os testes de performance.
- [influxDB](https://www.influxdata.com/): Banco de dados para executar os testes de performance.
- [@faker-js/faker](https://fakerjs.dev/): Geração de dados para realizar testes sem repetição.
- [Postman API](https://fakerjs.dev/): Ferramenta de testes manuais na API.

---

## 🚀 Como executar o projeto

### Requisitos

- Ter o `node` e o `pnpm` instalado localmente;
- Ter o `docker` instalado e rodando localmente;

Abra o terminal na pasta raiz do projeto.

Execute os seguintes comandos:

### Configuração de Ambiente

```ssh

# 🏃🏽 Para ativar o servidor
docker network create --attachable ebac-network
docker run -d --name wp -p 80:80 --network ebac-network ernestosbarbosa/lojaebac:latest

```

> Isso irá iniciar o servidor em http://localhost:80.

```ssh
# 📥 Instale as dependências
pnpm install
```

### 👨🏽‍🔬 Execução de testes

### 🏃🏽 Para executar os Testes manuais de API

- Caso você tenha o Postman localmente, você pode usar o arquivo `./API/loja-ebac.postman_collection.json`
  e aplicá-lo manualmente.

#### 📝 Relatório de testes Postman

- Para gerar um relatório dele será necessário rodar:
- `pnpm postman:reporter`
  > isso irá gerar um relatório em `API/Postman/newman-reporter`

### Para executar os Testes Automatizados de UI

#### 🧪 Para rodar a bateria de testes de Interface visualizando o fluxo

`pnpm cy:open`

#### 🧪 Para rodar a bateria de testes de Interface visualizando apenas o resultado no terminal

`pnpm cy:run`

#### 📝 Relatório de testes de UI

- Caso algum teste falhe será gerado um print da UI no momento do erro em `./UI/cypress/screenshots`
-

# 🧪 Para realizar a bateria de testes de API

pnpm test-api

# ⚡ Para realizar o teste de performance

docker-compose up

# ⚡ Para realizar os testes de Mobile localmente

É necessário você ter instalado em sua máquina:

- Appium
- Java
- Android Studio
- Criar um devide dentro do Android Studio
- instal o Appium Doctor através do comando: `npm -g @appium/doctor`

1. asdas
2. Instalar uiautomator2 driver rodando appium driver install uiautomator2 ;
3. Baixar appium-inspector; (comando adb not found);
4. Dentro do appium inspector setar as capabilities;
5. Rodar `java -jar ./Mobile/App/bundletool-all-1.16.0.jar install-apks --apks=./Mobile/App/ebacshop.apks`
6. abrir o emulator com "start session". Logo tem três coisas abertas, appium , emulator @nome-do-emulator , Appium Inspector com "start session" e appium doctor
7. No emulador aparecerá o aplicativo da EBAC.

---
