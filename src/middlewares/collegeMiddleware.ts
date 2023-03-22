import { NextFunction, Request, Response } from "express";
import { collegeInsertData } from "../schemas/collegeSchema.js";

export async function validadeDataCollege(req: Request, res: Response, next: NextFunction){
    const { error } = collegeInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}