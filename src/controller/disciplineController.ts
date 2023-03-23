import { Request, Response } from "express";
import * as disciplineService from "../services/disciplineServices.js"
import { checkInteger } from "../utils/checkInteger.js";


export async function getDisciplines(req: Request, res: Response){
   const result  = await disciplineService.getDisciplines();
   res.status(200).send(result);
}

export async function getStudentsByDiscipline(req: Request, res: Response){
    const disciplineId = await checkInteger(req.params.id);
    const result  = await disciplineService.getStundentsByDisciplineId(disciplineId);
    res.status(200).send(result);
}

export async function createDiscipline(req: Request, res: Response){
   const courseId = await checkInteger(req.headers.courseid);
   const data = req.body;
   const result = await disciplineService.createDiscipline(courseId, data);
   res.status(200).send(result);
}

export async function updateDiscipline(req: Request, res: Response){
    const disciplineId = await checkInteger(req.params.id);
    const data = req.body;
    const result = await disciplineService.updateDiscipline(disciplineId, data);
    res.status(200).send(result);
}

export async function deleteDiscipline(req: Request, res: Response){
    const disciplineId = await checkInteger(req.params.id);
    await disciplineService.deleteDiscipline(disciplineId);
    res.sendStatus(200);
}