import joi from "joi";
import { CursoInsertData } from "../repositories/courseRepository.js"; 

const courseInsertData = joi.object<CursoInsertData>({
    nome: joi.string().min(3).max(30).required(),
    faculdadeId: joi.number().required(),
});

export { courseInsertData };