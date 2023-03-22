import prisma from "../../../src/db.js";
import { FaculdadeInsertData } from "../../../src/repositories/collegeRepository.js";
import { Faculdade } from "@prisma/client";

export type DataFaculdade = Faculdade;

export function collegeBody():FaculdadeInsertData{
    const body: FaculdadeInsertData = {
        "nome": "Passei Direto",
	    "cnpj": "11.111.111/1111-11"
    };

    return body;
}

export function incorrectData():FaculdadeInsertData{
    const body: FaculdadeInsertData = {
        "nome": "d",
	    "cnpj": "11.111.111/1111"
    };

    return body;
}

export async function getCollegeByCnpj(cnpj: string){
    const result = await prisma.faculdade.findFirst({
        where: {
            cnpj: cnpj
        }
    });

    return result.id;
}

export async function insertCollege() {
    const result = await prisma.faculdade.create({
        data: collegeBody()
    });
    return result;
}
