import { Router } from "express";
import { createProfessor, deleteProfessor, getAllProfessors, updateProfessor } from "../controller/professorController.js";
import { validateProfessorData } from "../middlewares/professsorMiddleware.js";

const professorRouter = Router();

professorRouter.get("/professor", getAllProfessors)
professorRouter.post("/professor", validateProfessorData, createProfessor)
professorRouter.put("/professor/:id", validateProfessorData, updateProfessor)
professorRouter.delete("/professor/:id", deleteProfessor)

export default professorRouter;