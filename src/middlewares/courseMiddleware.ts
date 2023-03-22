import { NextFunction, Request, Response } from "express";
import { courseInsertData } from "../schemas/courseSchema.js";
import * as collegeRepository from "../repositories/collegeRepository.js"

export async function validadeDataCourse(req: Request, res: Response, next: NextFunction){
    const { error } = courseInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }
   
    next();
}