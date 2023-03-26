import { StudentData } from "../../../src/repositories/studentRepository.js";

export function studentBody():StudentData{
    const body: StudentData = {
        "nome": "Passei Direto",
	    "cpf": "02738461726"
    };

    return body;
}