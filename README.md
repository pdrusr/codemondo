# codemondo

Sistema de gerenciamento de atividades e alunos.

## Começo

Inicio rádipo da aplicação a partir do console/terminal.

```bash
# Instalação das dependências
npm install

# Iniciar o servidor (localhost:3000)
npm start
```

## Endpoints da API

Listagem dos endpoints existentes e disponíveis nessa versão.

```bash
# PAINEL
POST    /api/painel

# PROFESSOR
GET     /api/professor
POST    /api/professor      PROTEGIDO
DELETE  /api/professor      PROTEGIDO

# FASE
GET     /api/fase
POST    /api/fase           PROTEGIDO
DELETE  /api/fase           PROTEGIDO

# TURMA
GET     /api/turma          
GET     /api/turma/ativo    
GET     /api/turma/:codigo  
POST    /api/turma          PROTEGIDO
DELETE  /api/turma          PROTEGIDO

# ALUNO
GET     /api/aluno
GET     /aluno/ativo
GET     /api/aluno/:codigo
GET     /api/aluno/turma/:codigo
POST    /api/aluno          PROTEGIDO
PATCH   /api/aluno/tarefas  PROTEGIDO
DELETE  /api/aluno          PROTEGIDO
```

## Tecnologias

Tecnologias utilizadas para a construção desta versão do codemondo.

- [Restify](http://restify.com/docs/home/)
- [Postgres](https://www.postgresql.org/docs/)
- [NodeJs](https://nodejs.org/en/docs/)
- [RegEx](https://regexr.com/)
- [JsonWebToken](https://jwt.io/introduction)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Informações da aplicação

As principais informações desta aplicação. 

```bash
# AUTOR
PEDRO AUGUSTO DOS SANTOS

# VERSAO
1.0.0
```

## Contribuições

Lista com todos os que ajudaram ou contribuiram de alguma forma para o projeto.

- [Gustavo Henrique](https://github.com/Gustavo-Henrique-br)
- [Felipe Kauê]()

## Licença

MIT Licensed.