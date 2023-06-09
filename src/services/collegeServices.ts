import { FaculdadeInsertData } from "../repositories/collegeRepository.js"
import * as collegeRepository from "../repositories/collegeRepository.js";

export async function insertCollege(data: FaculdadeInsertData){
    await checkExistingCnpj(data.cnpj);
    return await collegeRepository.insertCollegeDb(data);
}

export async function getAllCollege(){
    return await collegeRepository.getAllCollegeDb();
}

export async function updateCollege(data: FaculdadeInsertData, id: number) {
    await checkExistingCollege(id);
    return await collegeRepository.updateCollegeDb(data, id);
}

export async function deleteCollege(id: number) {
    await checkExistingCollege(id);
    return await collegeRepository.deleteCollegeDb(id);
}

export async function checkExistingCollege(id){
    const college = await collegeRepository.getCollegeById(id);

    if (!college) {
        throw { type: "not_Found", message: `Faculdade com id ${id} não encontrado` }
    }
}

export async function getTotalCollegeStudents(collegeId: number){
    await checkExistingCollege(collegeId);
    return await collegeRepository.getTotalCollegeStudentsDb(collegeId);
}


async function checkExistingCnpj(cnpj: string){
    const getCollegeCnpj = await collegeRepository.getCnpj(cnpj);

    if (getCollegeCnpj) {
        throw { type: "conflict", message: "Já existe um faculdade com esse CNPJ" }
    }
}