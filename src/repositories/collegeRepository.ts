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