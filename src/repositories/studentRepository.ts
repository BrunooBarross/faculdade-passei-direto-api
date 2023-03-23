import prisma from "../db.js";
import { Aluno } from "@prisma/client";

export type StudentData = Omit<Aluno, "id">;

export async function createStudentDb(data: StudentData) {
    return await prisma.aluno.create({ data });
}

export async function getStudentsDb() {
    return await prisma.aluno.findMany();
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