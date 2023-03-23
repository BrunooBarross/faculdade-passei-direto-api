import { Request, Response } from "express";
import { checkInteger } from "../utils/checkInteger.js";
import * as professorService from "../services/professorServices.js"

export async function getAllProfessors(req: Request, res: Response) {
    const result = await professorService.getProfessors();
    res.status(200).send(result);
}

export async function createProfessor(req: Request, res: Response) {
    const data = req.body;
    const result = await professorService.createProfessor(data);
    res.status(201).send(result);
}

export async function updateProfessor(req: Request, res: Response) {
    const professorId = await checkInteger(req.params.id);
    const data = req.body;
    const result = await professorService.updateProfessor(professorId, data);
    res.status(200).send(result);
}

export async function deleteProfessor(req: Request, res: Response) {
    const professorId = await checkInteger(req.params.id);
    await professorService.deleteProfessor(professorId);
    res.sendStatus(200);
}