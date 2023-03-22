import { Router } from "express";
import collegeRouter from "./collegeRouter.js";

const router = Router();

router.use(collegeRouter);

export default router;