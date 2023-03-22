import { Router } from "express";
import { cretaCollege } from "../controller/collegeController.js";
import { validadeDataCollege } from "../middlewares/collegeMiddleware.js";


const collegeRouter = Router();

collegeRouter.post("/college", validadeDataCollege, cretaCollege);

export default collegeRouter;