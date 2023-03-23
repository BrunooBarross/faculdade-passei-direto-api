import prisma from "../db.js";
import { Curso } from "@prisma/client";

export type CursoInsertData = Omit<Curso, "id">

export async function insertCourseDb(data: CursoInsertData) {
    return await prisma.curso.create({
        data: {
            ...data
        }
    })
}

export async function getAllCoursesByCollegeDb(id: number) {
    return await prisma.faculdade.findUnique({
        where: {
            id: id
        },
        include: {
            cursos: true,
        }
    });
}

export async function updateCourseDb(data: CursoInsertData, id: number) {
    return await prisma.curso.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    })
}

export async function getCourseById(id: number) {
    return await prisma.curso.findUnique({
        where: {
            id: id
        },
    });
}

export async function deleteCourseDb(id: number) {
    await prisma.curso.delete({
        where: {
            id: id
        }
    })
}

export async function getAllStudentCoursesDB(id: number) {
    const result =  await prisma.$queryRaw`
        SELECT a.*
        FROM "Aluno" a
        INNER JOIN "DisciplinaMatricula" dm ON dm."alunoId" = a.id
        INNER JOIN "CursoDisciplina" cd ON cd."id" = dm."cursoDisciplinaId"
        WHERE cd."cursoId" = ${id};
    `
    return result;
}
