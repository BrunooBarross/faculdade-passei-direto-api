import { NextFunction, Request, Response } from "express";
import { disciplineInsertData } from "../schemas/disciplineSchema.js";

export async function validateDisciplineData(req: Request, res: Response, next: NextFunction){
    const { error } = disciplineInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }
    
    if (!req.headers.courseid) {
        throw { type: "unprocessable_entity", message: `É necessário um header 'courseId'` }
    }
   
    next();
}