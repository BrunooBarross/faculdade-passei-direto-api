import * as enrollmentRepository from "../repositories/enrollmentRepository.js";
import * as studentService from "../services/studentService.js";
import { EnrollmentDisciplineData } from "../repositories/enrollmentRepository.js";

export async function getAllEnrollments(){
    return await enrollmentRepository.getEnrollmentsDb();
}

export async function createEnrollment(data: EnrollmentDisciplineData) {
    if (data.dataMatricula) {
        data.dataMatricula = new Date(data.dataMatricula)
    }
    await checkExistsEnrollmentByDisciplineAndStudent(data);
    await studentService.checkExistingStudent(data.alunoId);
    await checkExistCourseDiscipline(data.cursoDisciplinaId);
    return await enrollmentRepository.createEnrollmentDb(data);
}

export async function updateEnrollment(enrollmentId: number, data: EnrollmentDisciplineData) {
    await checkExistEnrollment(enrollmentId);
    if (data.dataMatricula) {
        data.dataMatricula = new Date(data.dataMatricula)
    }
    return await enrollmentRepository.updateEnrollmentDb(enrollmentId, data);
}

export async function deleteEnrollment(enrollmentId: number) {
    await checkExistEnrollment(enrollmentId);
    return await enrollmentRepository.deleteEnrollmentDb(enrollmentId);
}

export async function checkExistsEnrollmentByDisciplineAndStudent(data: EnrollmentDisciplineData){
    const enrollment = await enrollmentRepository.checkExistsEnrollmentDb(data);
    
    if(enrollment) {
        throw { type: "conflict", message: `Aluno já esta matriculado na disciplina` }
    }
}

async function checkExistEnrollment(enrollmentId: number){
    const enrollment = await enrollmentRepository.getEnrollmentByIdDb(enrollmentId);

    if(!enrollment) {
        throw { type: "not_Found", message: `Matrícula não encontrada` }
    }
}

async function checkExistCourseDiscipline(courseDisciplineId: number){
    const result = await enrollmentRepository.checkExistCourseDisciplineDb(courseDisciplineId);

    if(!result) {
        throw { type: "not_Found", message: `Curso_disciplina não encontrado` }
    }
}