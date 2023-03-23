import { NextFunction, Request, Response } from "express";
import { professorInsertData } from "../schemas/professorSchema.js"; 

export async function validadeDataProfessor(req: Request, res: Response, next: NextFunction){
    const { error } = professorInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }
   
    next();
}