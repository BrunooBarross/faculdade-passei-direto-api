import joi from "joi";
import { DisciplineData } from "../repositories/disciplineRepository"; 

const disciplineInsertData = joi.object<DisciplineData>({
    nome: joi.string().min(3).max(80).required(),
    professorId: joi.number().optional(),
});
  
export { disciplineInsertData };