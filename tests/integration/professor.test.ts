import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db.js";
import { professorBody } from "./factories/professorFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM "Professor"`;
  });
afterAll(async () => {
    await prisma.$disconnect();
});


describe("Testes nas rotas de Professor", () => {
    it("Retorna 201 se o body estiver correto e persiste os dados", async () => {
        const body = professorBody();
        const result = await supertest(app).post("/professor").send(body);
        expect(result.status).toEqual(201);
    });

    it("Retorna 200 ao realizar o get dos dados", async () => {
        const body = professorBody();
        await supertest(app).post("/professor").send(body);
        const result = await supertest(app).get(`/professor`);
        expect(result.body.length).toEqual(1);
        expect(result.status).toEqual(200);
    });

    it("Retorna 422 se o body estiver incorreto ou faltando dados", async () => {
        const result = await supertest(app).post("/professor").send({});
        expect(result.status).toEqual(422);
    });

    it("Retorna 200 se atualizado os dados", async () => {
        const body = professorBody();
        const professor = await supertest(app).post("/professor").send(body);
        const result = await supertest(app).put(`/professor/${professor.body.id}`).send({nome: body.nome, formacao: "Engenheiro 2"});
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar os dados a serem atualizados", async () => {
        const body = professorBody();
        const result = await supertest(app).put(`/professor/1999`).send(body);
        expect(result.status).toEqual(404);
    });

    it("Retorna 200 se deletar os dados de um professor", async () => {
        const body = professorBody();
        const professor = await supertest(app).post("/professor").send(body);
        const result = await supertest(app).delete(`/professor/${professor.body.id}`);
        const getProfessors = await supertest(app).get(`/professor`);
        expect(getProfessors.body.length).toEqual(0);
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar os dados a deletados", async () => {
        const body = professorBody();
        const result = await supertest(app).put(`/professor/1999`).send(body);
        expect(result.status).toEqual(404);
    });
});