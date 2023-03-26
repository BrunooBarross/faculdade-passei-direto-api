import { CursoInsertData } from "../../../src/repositories/courseRepository.js";
import * as collegeRepository from "../../../src/repositories/collegeRepository.js";
import * as courseRepository from "../../../src/repositories/courseRepository.js";

export async function courseBody(){
    const college = await insertCollege();

    const body: CursoInsertData = {
        nome: "Curso Teste",
        faculdadeId: college.id
    };

    return body;
}

export async function insertCollege(){
    return await collegeRepository.insertCollegeDb({"nome": "Passei Direto 2",
    "cnpj": "22.222.222/222-22"});
}

export async function insertCourse() {
    const data = await courseBody();
    return await courseRepository.insertCourseDb(data);
}