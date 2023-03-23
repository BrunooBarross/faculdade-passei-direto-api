import { Router } from "express";
import { createCourse, deleteCourse, getAllCoursesbyCollege, getStudentsByCourse, updateCourse } from "../controller/courseController.js";
import { validateCourseData } from "../middlewares/courseMiddleware.js";

const courseRouter = Router();

courseRouter.post("/course", validateCourseData ,createCourse)
courseRouter.get("/course/college/:id", getAllCoursesbyCollege)
courseRouter.put("/course/:id", validateCourseData, updateCourse);
courseRouter.delete("/course/:id", deleteCourse);
courseRouter.get("/course/:id/students", getStudentsByCourse);
export default courseRouter;