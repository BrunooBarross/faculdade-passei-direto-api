import prisma from "../db.js";
import { Curso } from "@prisma/client";

export type CursoInsertData = Omit<Curso, "id">

export async function insertCourseDb(data: CursoInsertData){
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
