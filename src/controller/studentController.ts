import { Request, Response } from "express";
import { checkInteger } from "../utils/checkInteger.js";
import * as studentService from "../services/studentService.js"

export async function getAllStudents(req: Request, res: Response) {
    const result = await studentService.getStudents();
    res.status(200).send(result);
}

export async function createStudent(req: Request, res: Response) {
    const data = req.body;
    const result = await studentService.createStudent(data);
    res.status(201).send(result);
}

export async function updateStudent(req: Request, res: Response) {
    const studentId = await checkInteger(req.params.id);
    const data = req.body;
    const result = await studentService.updateStudent(studentId, data);
    res.status(200).send(result);
}

export async function deleteStudent(req: Request, res: Response) {
    const studentId = await checkInteger(req.params.id);
    await studentService.deleteStudent(studentId);
    res.sendStatus(200);
}