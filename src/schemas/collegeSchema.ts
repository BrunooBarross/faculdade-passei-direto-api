import joi from "joi";
import { FaculdadeInsertData } from "../repositories/collegeRepository";

const collegeInsertData = joi.object<FaculdadeInsertData>({
    nome: joi.string().min(3).max(80).required(),
    cnpj: joi.string().pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/).required(),
});

export { collegeInsertData };