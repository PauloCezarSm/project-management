```md
# Gerenciamento de Projetos

Este é um sistema de gerenciamento de projetos que permite criar, listar e gerenciar projetos, além de possibilitar a comunicação em tempo real entre os membros do projeto. A aplicação é composta por um backend em Node.js com MongoDB e um frontend em React.

## Estrutura do Projeto

```
docker-compose.yml
README.md
backend/
    package.json
    server.js
    config/
        auth.js
        db.js
    controllers/
        projectController.js
        userController.js
    models/
        projectModel.js
        userModel.js
    routes/
        projectRoutes.js
        userRoutes.js
frontend/
    package.json
    public/
    src/
        App.js
        index.js
        components/
            ProjectDetail.js
            ProjectList.js
```

### Descrição dos Diretórios

- **backend/**: Contém a API RESTful e a lógica do servidor, incluindo conexão com o banco de dados MongoDB.
- **frontend/**: Contém a interface do usuário desenvolvida em React.
- **docker-compose.yml**: Arquivo de configuração para orquestração dos serviços usando Docker.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Socket.IO
- **Frontend**:
  - React
  - Axios
- **Containerização**:
  - Docker e Docker Compose

## Funcionalidades

- **Gerenciamento de Projetos**:
  - Criação, listagem e gerenciamento de projetos.
- **Comunicação em Tempo Real**:
  - Envio e recebimento de mensagens entre os membros do projeto.
- **Integração com MongoDB**:
  - Persistência de dados dos projetos e usuários.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/username/project-management.git
   cd project-management
   ```

2. **Suba os containers com Docker Compose**:
   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## Configuração do Banco de Dados

O projeto utiliza o MongoDB como banco de dados. O serviço MongoDB é configurado automaticamente pelo Docker Compose.

## Estrutura do Banco de Dados

### Coleção `projects`
- **title**: Título do projeto (String, obrigatório)
- **description**: Descrição do projeto (String)
- **status**: Status do projeto (Enum: `not started`, `in progress`, `completed`)
- **members**: Lista de IDs de usuários associados ao projeto
- **created_at**: Data de criação do projeto

### Coleção `users`
- **name**: Nome do usuário (String, obrigatório)
- **email**: Email do usuário (String, obrigatório)
- **password**: Senha do usuário (String, obrigatório)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
