import * as professorRepository from "../repositories/professorRepository.js"

export async function getProfessors(){
    return await professorRepository.getProfessors();
}

export async function createProfessor(data: professorRepository.ProfessorData){
    return await professorRepository.createProfessor(data);
}

export async function updateProfessor(idProfessor: number, data: professorRepository.ProfessorData){
    await checkExistingProfessor(idProfessor);
    return await professorRepository.updateProfessor(idProfessor, data);
}

export async function deleteProfessor(idProfessor: number) {
    await checkExistingProfessor(idProfessor);
    return await professorRepository.deleteProfessor(idProfessor);
}

export async function checkExistingProfessor(idProfessor: number) {
    const professor = await professorRepository.getProfessor(idProfessor);

    if (!professor) {
        throw { type: "not_Found", message: `Professor com o id ${idProfessor} não encontrado` }
    }

    return professor;
}