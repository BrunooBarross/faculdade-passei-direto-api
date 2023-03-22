import { Request, Response } from "express";
import * as collegeService from "../services/collegeServices.js"

export async function createCollege(req: Request, res: Response){
    const data = req.body;
    const result = await collegeService.insertCollege(data);
    res.status(201).send(result);
}

export async function listCollege(req: Request, res: Response){
    const result = await collegeService.getAllCollege();
    res.status(200).send(result);
}

export async function updateCollege(req: Request, res: Response){
    const id = req.params.id;
    const data = req.body;
    const result = await collegeService.updateCollege(data, parseInt(id));
    res.status(200).send(result);
}