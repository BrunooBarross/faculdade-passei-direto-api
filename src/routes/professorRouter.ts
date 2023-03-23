import { Router } from "express";
import { createProfessor, deleteProfessor, getAllProfessors, updateProfessor } from "../controller/professorController.js";
import { validadeDataProfessor } from "../middlewares/professsorMiddleware.js";

const professorRouter = Router();

professorRouter.get("/professor", getAllProfessors)
professorRouter.post("/professor", validadeDataProfessor, createProfessor)
professorRouter.put("/professor/:id", validadeDataProfessor, updateProfessor)
professorRouter.delete("/professor/:id", deleteProfessor)

export default professorRouter;