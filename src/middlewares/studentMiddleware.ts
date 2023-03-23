import { NextFunction, Request, Response } from "express";
import { studentInsertData } from "../schemas/studentSchema.js"; 

export async function validateStudentData(req: Request, res: Response, next: NextFunction){
    const { error } = studentInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }
   
    next();
}