import prisma from "../db.js";
import { Disciplina, CursoDisciplina } from "@prisma/client";

export type DisciplineData = Omit<Disciplina, "id">
export type CourseDisciplineData = Omit<CursoDisciplina, "id">

export async function createDisciplineDb(data: DisciplineData) {
    return await prisma.disciplina.create({ data });
}

export async function updateDisciplineDb(id: number, data: DisciplineData) {
    return await prisma.disciplina.update({ where: { id }, data });
}

export async function deleteDisciplineDb(id: number) {
    return await prisma.disciplina.delete({ where: { id } });
}

export async function getDisciplinesDb() {
    return await prisma.disciplina.findMany();
}

export async function getDisciplineDb(id: number) {
    return await prisma.disciplina.findUnique({ where: { id } });
}

export async function enrollSubjectInCourseDb(data: CourseDisciplineData) {
    return await prisma.cursoDisciplina.create({ data });
}

export async function getStundentsByDisciplineIdDb(disciplinaId: number) {
    return await prisma.aluno.findMany({
        where: {
            matriculas: {
                some: {
                    cursoDisciplinaId: disciplinaId
                }
            }
        }
    });
}

export async function checkExistingDisciplineByNameAndCourseDb(courseId: number, disciplineName: string) {
    return await prisma.$queryRaw`
        SELECT c.id AS "cursoId", c.nome AS "nomeCurso", d.nome AS "nomeDisciplina"
        FROM "Curso" c
        INNER JOIN "CursoDisciplina" cd ON c.id = cd."cursoId"
        INNER JOIN "Disciplina" d ON cd."disciplinaId" = d.id
        WHERE LOWER(d.nome) = LOWER(${disciplineName}) AND c.id = ${courseId}
    `
}