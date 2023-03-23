import { Router } from "express";
import { createDiscipline, deleteDiscipline, getDisciplines, getStudentsByDiscipline, updateDiscipline } from "../controller/disciplineController.js";
import { validateDisciplineData } from "../middlewares/disciplineMiddleware.js";

const disciplineRouter = Router();

disciplineRouter.get("/discipline", getDisciplines);
disciplineRouter.get("/discipline/:id/students", getStudentsByDiscipline);
disciplineRouter.post("/discipline", validateDisciplineData, createDiscipline);
disciplineRouter.put("/discipline/:id", validateDisciplineData, updateDiscipline);
disciplineRouter.delete("/discipline/:id", deleteDiscipline);

export default disciplineRouter;