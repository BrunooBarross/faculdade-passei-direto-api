import * as collegeServices from "../services/collegeServices.js"
import * as courseRepository from "../repositories/courseRepository.js";

export async function insertCourse(data: courseRepository.CursoInsertData){
    await collegeServices.checkExistingCollege(data.faculdadeId);
    return await courseRepository.insertCourseDb(data);
}

export async function getAllCoursesByCollege(collegeId: number){
    await collegeServices.checkExistingCollege(collegeId);
    return await courseRepository.getAllCoursesByCollegeDb(collegeId);
}

export async function updateCourse(data: courseRepository.CursoInsertData, courseId: number){
    await collegeServices.checkExistingCollege(data.faculdadeId);
    await checkExistingCourse(courseId);
    return await courseRepository.updateCourseDb(data, courseId);
}

export async function deleteCourse(courseId: number){
    await checkExistingCourse(courseId);
    return await courseRepository.deleteCourseDb(courseId);
}

export async function checkExistingCourse(courseId: number){
    const course = await courseRepository.getCourseById(courseId);

    if (!course) {
        throw { type: "not_Found", message: `Curso com o id ${courseId} não encontrado` }
    }
}
