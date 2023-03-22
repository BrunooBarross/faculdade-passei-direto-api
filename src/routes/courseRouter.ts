import { Router } from "express";
import { createCourse, getAllCoursesbyCollege } from "../controller/courseController.js";
import { validadeDataCourse } from "../middlewares/courseMiddleware.js";

const courseRouter = Router();

courseRouter.post("/course", validadeDataCourse ,createCourse)
courseRouter.get("/course/college/:id", getAllCoursesbyCollege)

export default courseRouter;