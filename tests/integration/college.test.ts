import supertest from "supertest";
import app from "../../src/app.js";
import prisma from "../../src/db.js";
import { collegeBody, getCollegeByCnpj, incorrectData, insertCollege } from "./factories/collegeFactory.js";

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM "Faculdade"`;
  });
afterAll(async () => {
    await prisma.$disconnect();
});

describe("Testes nas rotas de Faculdades", () => {
    it("Retorna 201 se o body estiver correto e persiste os dados", async () => {
        const body = collegeBody();
        const result = await supertest(app).post("/college").send(body);
        const id = await getCollegeByCnpj("11.111.111/1111-11");
        expect(result.status).toEqual(201);
        expect(id).not.toBeNull();
    });

    it("Retorna 422 se algum campo do body estiver incorreto", async () => {
        const body = incorrectData();
        const result = await supertest(app).post("/college").send(body);
        expect(result.status).toEqual(422);
    });

    it("Retorna 201 se atualizado os dados", async () => {
        const body1 = await insertCollege();
        const body = collegeBody();
        const result = await supertest(app).put(`/college/${body1.id}`).send(body);
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar a faculdade a ser atualizada", async () => {
        const body = collegeBody();
        const result = await supertest(app).put(`/college/00000000`).send(body);
        expect(result.status).toEqual(404);
    });

    it("Retorna 200 se apagar uma faculdade", async () => {
        const body = await insertCollege();
        const result = await supertest(app).delete(`/college/${body.id}`);
        expect(result.status).toEqual(200);
    });

    it("Retorna 404 se não achar a faculdade a ser excluida", async () => {
        const result = await supertest(app).delete(`/college/00000000`);
        expect(result.status).toEqual(404);
    });
});