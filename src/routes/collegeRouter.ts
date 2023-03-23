import { Router } from "express";
import { createCollege, listCollege, updateCollege, deleteCollege, getTotalCollegeStudents } from "../controller/collegeController.js";
import { validateCollegeData } from "../middlewares/collegeMiddleware.js";


const collegeRouter = Router();

collegeRouter.post("/college", validateCollegeData, createCollege);
collegeRouter.get("/college", listCollege);
collegeRouter.put("/college/:id", validateCollegeData, updateCollege);
collegeRouter.delete("/college/:id", deleteCollege);
collegeRouter.get("/college/:id/students/count", getTotalCollegeStudents);

export default collegeRouter;