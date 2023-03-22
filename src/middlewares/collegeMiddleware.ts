import { NextFunction, Request, Response } from "express";
import { collegeInsertData } from "../schemas/collegeSchema.js";
import * as collegeRepository from "../repositories/collegeRepository.js"


export async function validadeDataCollege(req: Request, res: Response, next: NextFunction){
    const { error } = collegeInsertData.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    const getCollegeCnpj = await collegeRepository.getCnpj(req.body.cnpj);

    if (getCollegeCnpj) {
        throw { type: "conflict", message: "Já existe um faculdade com esse CNPJ" }
    }

    next();
}