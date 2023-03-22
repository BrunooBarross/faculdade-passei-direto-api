import { Router } from "express";
import { createCollege, listCollege, updateCollege, deleteCollege } from "../controller/collegeController.js";
import { validadeDataCollege } from "../middlewares/collegeMiddleware.js";


const collegeRouter = Router();

collegeRouter.post("/college", validadeDataCollege, createCollege);
collegeRouter.get("/college", listCollege);
collegeRouter.put("/college/:id", validadeDataCollege, updateCollege);
collegeRouter.delete("/college/:id", deleteCollege);

export default collegeRouter;