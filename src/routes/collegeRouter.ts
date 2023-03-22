import { Router } from "express";
import { createCollege, listCollege, updateCollege, deleteCollege, getTotalCollegeStudents } from "../controller/collegeController.js";
import { validadeDataCollege } from "../middlewares/collegeMiddleware.js";


const collegeRouter = Router();

collegeRouter.post("/college", validadeDataCollege, createCollege);
collegeRouter.get("/college", listCollege);
collegeRouter.put("/college/:id", validadeDataCollege, updateCollege);
collegeRouter.delete("/college/:id", deleteCollege);
collegeRouter.get("/college/:id/students/count", getTotalCollegeStudents);

export default collegeRouter;