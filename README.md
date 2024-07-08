# Trabalho 2 GCMES

Este é o branch principal (`main`) do projeto. Ele contém o código atualmente em produção.

## Visão Geral

- **Repositório**: (<https://github.com/joaovitormsilva/GCMES-Trabalho2>)
- **Versão Atual**: 1.0.0

## Introdução

Este repositório tem como objetivo implementar um fluxo DevOps em uma aplicação existente. A aplicação escolhida para este propósito é a [Guaradata](https://github.com/guaradata), que foi desenvolvida utilizando os frameworks NestJS e Nuxt. Além disso, a aplicação integra várias outras tecnologias e ferramentas, incluindo MongoDB, PostgreSQL, Prisma e NGINX.

## Objetivo

Demonstrar como uma abordagem DevOps pode ser aplicada para melhorar a eficiência e a qualidade do desenvolvimento, implantação e manutenção de aplicações.

## Requisitos

- [Docker Desktop](https://www.docker.com/get-started);
- [Git](https://git-scm.com/downloads);
- [Node.js](https://nodejs.org/en/download/package-manager);
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

## Configuração de desenvolvimento

### Parte 1 - Front-end

- 1 - Acesse a pasta do front-end

```bash
cd guaradata-frontend
```

- 2 - Renomeie o arquivo "env.example.txt" para ".env"

- 3 - Instale as dependências do projeto:

```bash
npm install
```

- 4 - Inicialize o servidor do Nuxt:

```bash
npm run dev
```

### Parte 2 - Back-end

- 1 - Acesse a pasta do backend:

```bash
cd guaradata-backend
```

- 2 - Renomeie o arquivo "env.example.txt" para ".env"

- 3 - Inicialize os contêineres da aplicação com:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

- 4 - Acesse a pasta do backend que está dentro de "guaradata-backend":

```bash
cd backend
```

- 5 - Renomeie o arquivo da pasta backend "env.example.txt" para ".env";

- 6 - Instale as dependências do projeto:

```bash
npm install
```

- 7 - Faça a migration com o Prisma:

```bash
npx prisma migrate dev --name init
```

- 8 - Inicialize o servidor do Nest.JS:

```bash
npm run start:dev
```

### Parte 3 - Crie um usuário

- 1 - Instale a extensão "REST Client" no VS Code;

- 2 - Acesse a pasta do backend:

```bash
cd guaradata-backend/backend
```

- 3 - Acesse o arquivo "api.user.http";

- 4 - Realize a requisição para criar um usuário apertando o botão "Send Request" (é possível alterar o e-mail e senha);
  
- 5 - Faça o login por meio do arquivo "api.login.http".
