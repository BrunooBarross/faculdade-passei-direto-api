import { Request, Response } from "express";
import * as collegeService from "../services/collegeServices.js"

export async function cretaCollege(req: Request, res: Response){
    const data = req.body;
    const result = await collegeService.insertCollege(data);
    res.status(201).send(result);
}