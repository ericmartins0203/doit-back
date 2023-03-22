# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


## Rotas e Endpoints

| Methods | Endpoint     | Responsability                                    | Bearer Token |
| ------- | -------------| ------------------------------------------------- | ------------ |
| POST    | [/user]      | Cadastro de usuário.                              | Não precisa  |
| POST    | [/user/login]| Login com o usuário.                              | Não precisa  |
| GET     | [/user]      | Pegar os dados do usuário.                        | precisa      |
| PATCH   | [/user]      | Atualiza dados do usuário.                        | precisa      |
| POST    | [/task]      | Cria novas tarefas                                | precisa      |
-------


<!-- 3. Create postgres docker image `docker run --name <container-name> -e POSTGRES_PASSWORD=<postgres-password> -p 5432:5432 -d postgres`
4. Create database in postgres `docker exec -it <container-name> psql -U postgres` -->