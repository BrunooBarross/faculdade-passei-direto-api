import joi from "joi";
import { EnrollmentDisciplineData } from "../repositories/enrollmentRepository.js";

const enrollmenteData = joi.object<EnrollmentDisciplineData>({
    cursoDisciplinaId: joi.number().required(),
    alunoId: joi.number().required(),
    dataMatricula: joi.date().optional(),
});
  
export { enrollmenteData };