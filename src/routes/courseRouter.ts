import { Router } from "express";
import { createCourse, deleteCourse, getAllCoursesbyCollege, updateCourse } from "../controller/courseController.js";
import { validadeDataCourse } from "../middlewares/courseMiddleware.js";

const courseRouter = Router();

courseRouter.post("/course", validadeDataCourse ,createCourse)
courseRouter.get("/course/college/:id", getAllCoursesbyCollege)
courseRouter.put("/course/:id", validadeDataCourse, updateCourse);
courseRouter.delete("/course/:id", deleteCourse);

export default courseRouter;