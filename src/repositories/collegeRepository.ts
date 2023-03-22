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