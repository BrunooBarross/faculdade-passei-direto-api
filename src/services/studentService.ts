import * as studentRepository from "../repositories/studentRepository.js"

export async function getStudents(){
    return await studentRepository.getStudentsDb();
}

export async function createStudent(data:studentRepository.StudentData){
    return await studentRepository.createStudentDb(data);
}

export async function updateStudent(idStudent: number, data:studentRepository.StudentData){
    await checkExistingStudent(idStudent);
    return await studentRepository.updateStudentDb(idStudent, data);
}

export async function deleteStudent(idStudent: number) {
    await checkExistingStudent(idStudent);
    return await studentRepository.deleteStudentDb(idStudent);
}

export async function checkExistingStudent(idStudent: number) {
    const student = await studentRepository.getStudentDb(idStudent);

    if (!student) {
        throw { type: "not_Found", message: `Aluno com o id ${idStudent} não encontrado` }
    }

    return student;
}