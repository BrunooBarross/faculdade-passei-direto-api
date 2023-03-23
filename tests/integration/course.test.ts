import supertest from "supertest";
import { jest } from '@jest/globals';
import app from "../../src/app.js";
import prisma from "../../src/db.js";
import { courseBody, insertCourse } from "./factories/courseFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM "Faculdade"`;
    await prisma.$executeRaw`DELETE FROM "Curso"`;
  });
afterAll(async () => {
    await prisma.$disconnect();
});

describe("Teste no CRUD Colege", () => {
    it("Retorna 201 se o body estiver correto e persistir os dados", async () => {
        const body = await courseBody();
        const result = await supertest(app).post("/course").send(body);
        expect(result.status).toEqual(201);
    });

    it("Retorna 422 se o body estiver incorreto", async () => {
        const result = await supertest(app).post("/course").send({});
        expect(result.status).toEqual(422);
    });

    it("Retorna 200 se atualizar os dados", async () => {
        const body = await insertCourse();
        const result = await supertest(app).put(`/course/${body.id}`).send({nome: body.nome, faculdadeId: body.faculdadeId});
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não existir o faculdadeId", async () => {
        const result = await supertest(app).put("/course").send({ nome: "Curso Teste", faculdadeId: 0});
        expect(result.status).toEqual(404);
    });

    it("Retorna 422 se não encontrar o curso", async () => {
        const body = await courseBody();
        const result = await supertest(app).put(`/course/999`).send(body);
        expect(result.status).toEqual(404);
    });

});