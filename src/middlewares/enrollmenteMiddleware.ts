import { NextFunction, Request, Response } from "express";
import { enrollmenteData } from "../schemas/enrollmentSchema.js";  

export async function validateEnrollmentData(req: Request, res: Response, next: NextFunction){
    const { error } = enrollmenteData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }
   
    next();
}