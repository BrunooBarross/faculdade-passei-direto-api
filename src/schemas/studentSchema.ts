import Joi from 'joi';
import { StudentData } from "../repositories/studentRepository"; 

const studentInsertData = Joi.object<StudentData>({
    nome: Joi.string().min(3).max(80).required(),
    cpf: Joi.string().min(11).max(11).required(),
});

export { studentInsertData };