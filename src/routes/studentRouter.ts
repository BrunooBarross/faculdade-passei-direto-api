import { Router } from "express";
import { createStudent, deleteStudent, getAllStudents, updateStudent } from "../controller/studentController.js";
import { validateStudentData } from "../middlewares/studentMiddleware.js";

const studentRouter = Router();

studentRouter.get("/student", getAllStudents)
studentRouter.post("/student", validateStudentData, createStudent)
studentRouter.put("/student/:id", validateStudentData, updateStudent)
studentRouter.delete("/student/:id", deleteStudent)

export default studentRouter;