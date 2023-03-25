import * as disciplineRepository from "../repositories/disciplineRepository.js"
import { checkExistingProfessor } from "../services/professorServices.js"
import { checkExistingCourse } from "../services/courseServices.js"

export async function getDisciplines() {
    return await disciplineRepository.getDisciplinesDb();
}

export async function getStundentsByDisciplineId(disciplinaId: number){
    await checkExistingDisciplineId(disciplinaId);
    return await disciplineRepository.getStundentsByDisciplineIdDb(disciplinaId);
}

export async function createDiscipline(courseId: number, data: disciplineRepository.DisciplineData) {
    await checkExistingCourse(courseId);
    await checkExistingDisciplineByNameAndCourse(courseId, data.nome);

    if (data.professorId) {
        await checkExistingProfessor(data.professorId);
    }

    const insertDiscipline = await disciplineRepository.createDisciplineDb(data);
    await disciplineRepository.enrollSubjectInCourseDb({ cursoId: courseId, disciplinaId: insertDiscipline.id });
    return insertDiscipline;
}

export async function updateDiscipline(disciplineId: number, data: disciplineRepository.DisciplineData) {
    if (data.professorId) {
        await checkExistingProfessor(data.professorId);
    }
    
    return await disciplineRepository.updateDisciplineDb(disciplineId, data)
}

export async function deleteDiscipline(disciplineId: number) {
    await checkExistingDisciplineId(disciplineId);
    return await disciplineRepository.deleteDisciplineDb(disciplineId);
}

export async function checkExistingDisciplineId(disciplineId: number) {
    const discipline = await disciplineRepository.getDisciplineDb(disciplineId);

    if (!discipline) {
        throw { type: "not_Found", message: `Disciplina com o id ${disciplineId} não encontrado` }
    }

    return discipline;
}

export async function checkExistingDisciplineByNameAndCourse(courseId: number, disciplineName: string) {
    const result = await disciplineRepository.checkExistingDisciplineByNameAndCourseDb(courseId, disciplineName);

    if (result) {
        throw { type: "conflict", message: `Curso já possui uma disciplina com nome:  '${disciplineName}'` }
    }
}