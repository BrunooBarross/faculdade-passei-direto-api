import prisma from "../db.js";
import { Faculdade } from "@prisma/client";

export type FaculdadeInsertData = Omit<Faculdade, "id">

export async function getCnpj(cnpj: string) {
    return await prisma.faculdade.findUnique({
        where: {
            cnpj
        }
    })
}

export async function insertCollegeDb(data: FaculdadeInsertData) {
    return await prisma.faculdade.create({
        data: {
            ...data
        }
    })
}

export async function getAllCollegeDb() {
    return await prisma.faculdade.findMany({});
}

export async function updateCollegeDb(data: FaculdadeInsertData, id: number) {
    return await prisma.faculdade.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    })
}

export async function getCollegeById(id: number) {
    return await prisma.faculdade.findUnique({
        where: {
            id
        }
    })
}

export async function deleteCollegeDb(id: number) {
    await prisma.faculdade.delete({
        where: {
            id: id
        }
    })
}

export async function getTotalCollegeStudentsDb(id: number) {
    const result = await prisma.$queryRaw`  
      SELECT COUNT(DISTINCT a.id) AS "total_alunos"
      FROM "Aluno" a
      INNER JOIN "DisciplinaMatricula" dm ON dm."alunoId" = a.id
      INNER JOIN "CursoDisciplina" cd ON cd.id = dm."cursoDisciplinaId"
      INNER JOIN "Curso" c ON c.id = cd."cursoId"
      INNER JOIN "Faculdade" f ON f.id = c."faculdadeId"
      WHERE f.id = ${id};
    `;
    
    const totalStudents = {totalAlunos: Number(result[0].total_alunos)};
    return totalStudents;
}