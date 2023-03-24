import { Request, Response } from "express";
import { checkInteger } from "../utils/checkInteger.js";
import * as enrollmentService from "../services/enrollmentService.js";

export async function getAllEnrollments(req: Request, res: Response){
    const enrollments = await enrollmentService.getAllEnrollments();
    res.status(200).send(enrollments);
}

export async function createEnrollment(req: Request, res: Response) {
    const enrollment = await enrollmentService.createEnrollment(req.body);
    res.status(201).send(enrollment);
}

export async function updateEnrollment(req: Request, res: Response) {
    const enrollmentId = await checkInteger(req.params.enrollmentId);
    const data = req.body;
    const enrollment = await enrollmentService.updateEnrollment(enrollmentId, data);
    res.status(200).send(enrollment);
}

export async function deleteEnrollment(req: Request, res: Response) {
    const enrollmentId = await checkInteger(req.params.enrollmentId);
    await enrollmentService.deleteEnrollment(enrollmentId);
    res.sendStatus(200);
}