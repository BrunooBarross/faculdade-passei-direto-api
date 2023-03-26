import * as studentRepository from "../repositories/studentRepository.js"

export async function getStudents() {
    return await studentRepository.getStudentsDb();
}

export async function getAllStudentDisciplines(studentId: number) {
    await checkExistingStudent(studentId);
    return await studentRepository.getAllStudentDisciplinesDb(studentId);
}

export async function createStudent(data: studentRepository.StudentData) {
    await checkExistsStudentByCpf(data.cpf);
    return await studentRepository.createStudentDb(data);
}

export async function updateStudent(studentId: number, data: studentRepository.StudentData) {
    await checkExistingStudent(studentId);
    return await studentRepository.updateStudentDb(studentId, data);
}

export async function deleteStudent(studentId: number) {
    await checkExistingStudent(studentId);
    return await studentRepository.deleteStudentDb(studentId);
}

export async function checkExistingStudent(studentId: number) {
    const student = await studentRepository.getStudentDb(studentId);

    if (!student) {
        throw { type: "not_Found", message: `Aluno com o id ${studentId} não encontrado` }
    }

    return student;
}

export async function checkExistsStudentByCpf(cpf: string) {
    const student = await studentRepository.checkExistsStudentByCpfDb(cpf);

    if (student) {
        throw { type: "conflict", message: `Cpf já esta em uso` }
    }

}