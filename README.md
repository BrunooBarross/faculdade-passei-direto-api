<p align="center">
  <h1 align="center">
    Passei Direto  - PD Soluções
  </h1>
</p>

## 💻 Tecnologias Utilizadas

- Node
- TypeScript
- Express
- Joi
- Prisma
- Jest
- SuperTest
- PostgreSQL


---

 - O objetivo desse teste é criar uma API baseado em um modelo de banco de dados;
 - A API deve ser construida visando se possível realizar os CRUDS das entidades.

---

## 🎮 Requisitos obrigatórios

 - Realizar um filtro para obter todos os alunos de um curso.
 - Realizar um filtro para obter todos os alunos de uma disciplina.
 - Realizar um filtro para obter todos os cursos de uma faculdade.
 - Realizar um filtro para obter quais disciplinas um determinado aluno cursa.
 - Realizar um filtro para obter o total de alunos de uma faculdade.

---

## 🏦 Modelo do Banco

![image](https://user-images.githubusercontent.com/91610976/227734232-58824ecf-9e42-4ea6-b264-40d38ae2a327.png)

---

## 👀 Obervações Gerais

 O modelo fornecido, sem muitas informações de construção, pode dar origem a diversas interpretações. Por isso, adotei algumas lógicas:

 - Como existe um modelo de tabela para faculdade, entendi que a Passei Direto seria um centro universitário com diversas faculdades;
 - Ao excluir uma Faculdade ou Curso, quase todos os relacionamentos serão desfeitos/excluídos através do método ON DELETE CASCADE, mas os professores e alunos continuarão existindo;
 - O aluno possui um estado global porque ele pode estar em disciplinas distintas de cursos e até faculdades diferentes;
 - O professor possui um estado global porque pode dar aulas em disciplinas de cursos diferentes e até em faculdades diferentes;
 - Ao cadastrar uma disciplina, fica opcional a vinculação a um professor, sendo possível adicionar o professor a qualquer momento;
 - Foram adicionados rotas to tipo GET buscando todos os dados para facilitar na busca de id`s assim como a correção e utilização no insomnia.


## 👨🏻‍💻 Instalação

```bash

$ git clone https://github.com/BrunooBarross/faculdade-passei-direto-api.git

$ cd faculdade-passei-direto-api

- Na raiz do projeto crie um arquivo .env e .env.test conforme específicado no .env-example e .env.test-example

```

- Abra um terminal na raiz do projeto e execute:

```bash

$ npm i

$ npm run migrate:seed

$ npm run dev

- obs:  O comando npm run migrate:seed cria o banco e popula ele com alguns dados

```

- Caso ocorra algum erro de TS node ou no migrate:seed execute

```bash

$ npm install -g ts-node        - para erros ts-node

$ npx prisma migrate dev        - para erros migrate:seed

$ npm run migrate:seed          - para erros migrate:seed

```

## 🛫 Testes

- Caso queira executar os testes da aplicação, tenha a certeza de ter configurado o .env.test na raiz do projeto conforme o passo 1 dessa instalação, lembrando que no final da url do .env.test tem que colocar um nome diferente de um banco de dados, este banco não precisa estar criado, apenas o nome deverá ser diferente do banco do arquivo .env
- Com o arquivo configrado corretantente execute:

```bash

$ npm run test

```

## 🚀 API:

- Caso queria executar a api utilize novamente o comando "npm run dev", e importe em seu insomnia o arquivo localizado na pasta insomnia.
- Para importar leia: https://docs.insomnia.rest/insomnia/import-export-data
- As rotas são:

```yml
POST /college
    - Rota para cadastro de faculdades
    - headers: {}
    - body: {
        "nome": string - "Nome da faculdade" - min 3 caracteres max 80 caracteres,
        "cnpj": String - formato - "XX.XXX.XXX/XXXX-XX"
    }
```

```yml
GET /college
    - Rota para facilitar os testes e visualização dos id`s
    - headers: {}
    - body: {}
```

```yml
GET /college/:id/students/count
    - Rota para filtrar o total de alunos de uma faculdade (REQUISITO OBRIGATÓRIO)
    - O id da rota é o da faculdade
    - headers: {}
    - body: {}
```

```yml
PUT /college/:id
    - Rota para atualizar os dados de uma faculdade, o id da rota é o id da faculdade
    - headers: {}
    - body: {
        "nome": string - "Nome da faculdade" - min 3 caracteres max 80 caracteres,
        "cnpj": String - formato - "XX.XXX.XXX/XXXX-XX"
    }
```

```yml
DELETE /college/:id
    - Rota para deletar uma faculdade, o id da rota é o id da faculdade (Cascade)
    - headers: {}
    - body: {}
```

```yml
POST /course
    - Rota para criar um curso
    - headers: {}
    - body: {
        "nome": string - "Nome do curso" - min 3 caracteres max 80 caracteres,
        "faculdadeId": Number 
    }
```

```yml
GET /course/college/:faculdadeId
    - FILTRA todos os cursos de uma Faculdade (REQUISITO OBRIGATÓRIO)
    - O id da rota é o id da faculdade
    - headers: {}
    - body: {}
```

```yml
GET /course/:id/students
    - FILTRA todos os alunos de um curso (REQUISITO OBRIGATÓRIO)
    - O id da rota é o id do Curso
    - headers: {}
    - body: {}
```

```yml
PUT /course/:id
    - Rota para editar um curso
    - Id da rota é o id do Curso
    - headers: {}
    - body: {
        "nome": string - "Nome do curso" - min 3 caracteres max 80 caracteres,
        "faculdadeId": Number 
    }
```

```yml
DELETE /course/:id
    - Rota para deletar um curso (Cascade)
    - Id da rota é o id do Curso
    - headers: {}
    - body: {}
```

```yml
POST /professor
    - Rota para adicionar um professor
    - headers: {}
    - body: {
        "nome": string - "Nome do Professor" - min 3 caracteres max 80 caracteres,
        "formacao": string - "Nome da formacao" - min 3 caracteres max 80 caracteres
    }
```

```yml
GET /professor
    - Rota para auxiliar no teste manual e na identificação dos id`s, busca todos os professores
    - headers: {}
    - body: {}
```

```yml
PUT /professor/:id
    - Rota para editar um professor
    - Id da rota é o id do professor
    - headers: {}
    - body: {
        "nome": string - "Nome do Professor" - min 3 caracteres max 80 caracteres,
        "formacao": string - "Nome da formacao" - min 3 caracteres max 80 caracteres
    }
```

```yml
DELETE /professor/:id
    - Rota para deletar um professor (Cascade)
    - Id da rota é o id do professor
    - headers: {}
    - body: {}
```

- OBS: O professorId da rota seguinte é opcional, sendo possível adicionar o professor a qualquer momento via PUT

```yml
POST /discipline
    - Rota para adicionar uma disciplina
    - headers: { courseid: number }
    - body: {
        "nome": string - "Nome da Disciplina" - min 3 caracteres max 80 caracteres,
        "professorId": number - id do professor - esse é um campo opcional podendo vincular o professor no PUT
    }
```

```yml
GET /discipline
    - Rota para auxiliar no teste manual e na identificação dos id`s das disciplinas
    - headers: {}
    - body: {}
```

```yml
GET /discipline/:id/students
    - FILTRO de todos os Alunos de uma disciplina (REQUISITO OBRIGATÓRIO)
    - O id da rota é o id da disciplina
    - headers: {}
    - body: {}
```

```yml
PUT /discipline/:id
    - Rota para editar uma disciplina
    - O id da rota é o id da disciplina
    - headers: {}
    - body: {
        "nome": string - "Nome da Disciplina" - min 3 caracteres max 80 caracteres,
        "professorId": number - O id do professor
    }
```

```yml
DELETE /discipline/:id
    - Rota para deletar uma disciplina (Cascade)
    - O id da rota é o id da disciplina
    - headers: {}
    - body: {}
```

```yml
POST /student
    - Rota para adicionar um aluno
    - headers: {}
    - body: {
        "nome": string - "Nome do Aluno" - min 3 caracteres max 80 caracteres,
        "cpf": string - "XXXXXXXXXXX" - length 11 caracteres
    }
```

```yml
GET /student
    - Rota para auxiliar no teste manual e na identificação dos id`s dos alunos
    - headers: {}
    - body: {}
```

```yml
GET /student/:id/disciplines
    - FILTRA todas as disciplinas de um aluno (REQUITO OBRIGATÓRIO)
    - O id da rota é o id do aluno
    - headers: {}
    - body: {}
```

```yml
PUT /student/:id
    - Rota para editar um aluno
     - O id da rota é o id do aluno
    - headers: {}
    - body: {
        "nome": string - "Nome do Aluno" - min 3 caracteres max 80 caracteres,
        "cpf": string - "XXXXXXXXXXX" - length 11 caracteres
    }
```

```yml
DELETE /student/:id
    - Rota para deletar um aluno (Cascade)
     - O id da rota é o id do aluno
    - headers: {}
    - body: {}
```

```yml
POST /enrollment
    - Rota para inscrever aluno em uma disciplina
    - headers: {}
    - body: {
        "cursoDisciplina": number - Utilize a rota que busca todas as diciplinas para pegar o cursoDisciplina,
        "alunoId": number - id do aluno,
        "dataMatricula": Date - Opcional Default DateNow
    }
```

```yml
GET /enrollment
    - Rota para auxiliar no teste e na identificação dos ids de inscrições
    - headers: {}
    - body: {
        "cursoDisciplina": number - Utilize a rota que busca todas as diciplinas para pegar o cursoDisciplina,
        "alunoId": number - id do aluno,
        "dataMatricula": Date - Opcional Default DateNow
    }
```


```yml
PUT /enrollment/:id
    - Rota para editar uma inscrição
    - O id da rota é o id da inscrição
    - headers: {}
    - body: {
        "cursoDisciplina": number - Utilize a rota que busca todas as diciplinas para pegar o cursoDisciplina,
        "alunoId": number - id do aluno,
        "dataMatricula": Date - Opcional Default DateNow
    }
```

```yml
DELETE /enrollment/:id
    - Rota para excluir uma inscrição
    - O id da rota é o id da inscrição
    - headers: {}
    - body: {}
```
