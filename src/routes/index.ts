import { Router } from "express";
import collegeRouter from "./collegeRouter.js";
import courseRouter from "./courseRouter.js";

const router = Router();

router.use(collegeRouter);
router.use(courseRouter);

export default router;