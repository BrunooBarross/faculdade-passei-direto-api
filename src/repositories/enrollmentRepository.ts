import prisma from "../db.js";
import { DisciplinaMatricula } from "@prisma/client";

export type EnrollmentDisciplineData = Omit<DisciplinaMatricula, "id">;

export async function getEnrollmentsDb(){
    return await prisma.disciplinaMatricula.findMany();
};

export async function getEnrollmentByIdDb(id: number){
    return await prisma.disciplinaMatricula.findUnique({
        where: {
            id
        }
    });
};

export async function createEnrollmentDb(enrollment: EnrollmentDisciplineData){
    return await prisma.disciplinaMatricula.create({
        data: enrollment
    });
};

export async function updateEnrollmentDb(id: number, enrollment: EnrollmentDisciplineData){
    return await prisma.disciplinaMatricula.update({
        where: {
            id: id
        },
        data: enrollment
    });
};

export async function deleteEnrollmentDb(id: number){
    return await prisma.disciplinaMatricula.delete({
        where: {
            id: id
        }
    });
};

export async function checkExistsEnrollmentDb(enrollment: EnrollmentDisciplineData) {
    const existingEnrollment = await prisma.$queryRaw`
        SELECT * FROM "DisciplinaMatricula"
        WHERE "cursoDisciplinaId" = ${enrollment.cursoDisciplinaId}
        AND "alunoId" = ${enrollment.alunoId}
    `;

    return existingEnrollment[0];
};

export async function checkExistCourseDisciplineDb(courseDisciplineId: number){
    return await prisma.cursoDisciplina.findFirst({
        where: {
            id: courseDisciplineId
        }
    });
}