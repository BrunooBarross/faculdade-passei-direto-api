import { ProfessorData } from "../../../src/repositories/professorRepository.js";

export function professorBody():ProfessorData{
    const body: ProfessorData = {
        "nome": "Passei Direto",
	    "formacao": "Engenheiro de Dados"
    };

    return body;
}