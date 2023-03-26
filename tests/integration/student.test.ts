import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db.js";
import { studentBody } from "./factories/studentFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM "Aluno"`;
  });
afterAll(async () => {
    await prisma.$disconnect();
});


describe("Testes nas rotas de Aluno", () => {
    it("Retorna 201 se o body estiver correto e persiste os dados", async () => {
        const body = studentBody();
        const result = await supertest(app).post("/student").send(body);
        expect(result.status).toEqual(201);
    });

    it("Retorna 409 se já existir um cpf", async () => {
        const body = studentBody();
        await supertest(app).post("/student").send(body);
        const result = await supertest(app).post("/student").send(body);
        expect(result.status).toEqual(409);
    });

    it("Retorna 200 ao realizar o get dos dados", async () => {
        const body = studentBody();
        await supertest(app).post("/student").send(body);
        const result = await supertest(app).get(`/student`);
        expect(result.body.length).toEqual(1);
        expect(result.status).toEqual(200);
    });

    it("Retorna 422 se o body estiver incorreto ou faltando dados", async () => {
        const result = await supertest(app).post("/student").send({});
        expect(result.status).toEqual(422);
    });

    it("Retorna 200 se atualizado os dados", async () => {
        const body = studentBody();
        const student = await supertest(app).post("/student").send(body);
        const result = await supertest(app).put(`/student/${student.body.id}`).send({nome: body.nome, cpf: "03846172648"});
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar os dados a serem atualizados", async () => {
        const body = studentBody();
        const result = await supertest(app).put(`/student/1999`).send(body);
        expect(result.status).toEqual(404);
    });

    it("Retorna 200 se deletar os dados de um aluno", async () => {
        const body = studentBody();
        const student = await supertest(app).post("/student").send(body);
        const result = await supertest(app).delete(`/student/${student.body.id}`);
        const getStudents= await supertest(app).get(`/student`);
        expect(getStudents.body.length).toEqual(0);
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar os dados a deletados", async () => {
        const body = studentBody();
        const result = await supertest(app).put(`/student/1999`).send(body);
        expect(result.status).toEqual(404);
    });
});