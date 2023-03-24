import prisma from "../db.js";
import { Aluno } from "@prisma/client";

export type StudentData = Omit<Aluno, "id">;

export async function createStudentDb(data: StudentData) {
    return await prisma.aluno.create({ data });
}

export async function getStudentsDb() {
    return await prisma.aluno.findMany();
}

export async function getAllStudentDisciplinesDb(alunoId: number) {
    return await prisma.$queryRaw`
        SELECT dm.id as "enrollmentId", cd.id as "cursoDisciplinaId", a.id as "alunoId", d.nome as "disciplina", dm."dataMatricula" 
        FROM "Disciplina" d
        INNER JOIN "CursoDisciplina" cd ON cd."disciplinaId" = d.id
        INNER JOIN "DisciplinaMatricula" dm ON dm."cursoDisciplinaId" = cd.id
        INNER JOIN "Aluno" a ON a.id = dm."alunoId"
        WHERE a.id = ${alunoId};
    `
}

export async function getStudentDb(id: number) {
    return await prisma.aluno.findUnique({ where: { id } });
}

export async function updateStudentDb(id: number, data: StudentData) {
    return await prisma.aluno.update({ where: { id }, data });
}

export async function deleteStudentDb(id: number) {
    return await prisma.aluno.delete({ where: { id } });
}