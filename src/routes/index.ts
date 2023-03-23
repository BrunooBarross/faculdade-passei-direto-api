import { Router } from "express";
import collegeRouter from "./collegeRouter.js";
import courseRouter from "./courseRouter.js";
import professorRouter from "./professorRouter.js";

const router = Router();

router.use(collegeRouter);
router.use(courseRouter);
router.use(professorRouter);

export default router;