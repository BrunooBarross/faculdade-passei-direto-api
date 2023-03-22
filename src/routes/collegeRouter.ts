import { Router } from "express";
import { createCollege, listCollege, updateCollege } from "../controller/collegeController.js";
import { validadeDataCollege } from "../middlewares/collegeMiddleware.js";


const collegeRouter = Router();

collegeRouter.post("/college", validadeDataCollege, createCollege);
collegeRouter.get("/college", listCollege);
collegeRouter.put("/college/:id", validadeDataCollege, updateCollege);

export default collegeRouter;