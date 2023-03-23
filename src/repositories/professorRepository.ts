import prisma from "../db.js";
import { Professor } from "@prisma/client";

export type ProfessorData = Omit<Professor, "id">;

export async function createProfessor(data: ProfessorData) {
    return await prisma.professor.create({ data });
}

export async function getProfessors() {
    return await prisma.professor.findMany();
}

export async function getProfessor(id: number) {
    return await prisma.professor.findUnique({ where: { id } });
}

export async function updateProfessor(id: number, data: ProfessorData) {
    return await prisma.professor.update({ where: { id }, data });
}

export async function deleteProfessor(id: number) {
    return await prisma.professor.delete({ where: { id } });
}