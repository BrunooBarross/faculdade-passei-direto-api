import { Router } from "express";
import collegeRouter from "./collegeRouter.js";
import courseRouter from "./courseRouter.js";
import professorRouter from "./professorRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import studentRouter from "./studentRouter.js";
import enrollmentRouter from "./enrollmentRouter.js";

const router = Router();

router.use(collegeRouter);
router.use(courseRouter);
router.use(professorRouter);
router.use(disciplineRouter);
router.use(studentRouter);
router.use(enrollmentRouter);

export default router;