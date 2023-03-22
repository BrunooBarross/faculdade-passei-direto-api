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
