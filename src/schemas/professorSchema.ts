import joi from "joi";
import { ProfessorData } from "../repositories/professorRepository.js";

const professorInsertData = joi.object<ProfessorData>({
    nome: joi.string().min(3).max(80).required(),
    formacao: joi.string().min(3).max(80).required(),
});

export { professorInsertData };