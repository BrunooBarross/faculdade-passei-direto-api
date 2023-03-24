import { Router } from "express";
import { getAllEnrollments, createEnrollment, updateEnrollment, deleteEnrollment } from "../controller/enrollmentController.js";
import { validateEnrollmentData } from "../middlewares/enrollmenteMiddleware.js";

const enrollmentRouter = Router();

enrollmentRouter.get("/enrollment", getAllEnrollments)
enrollmentRouter.post("/enrollment", validateEnrollmentData, createEnrollment)
enrollmentRouter.put("/enrollment/:enrollmentId", validateEnrollmentData, updateEnrollment)
enrollmentRouter.delete("/enrollment/:enrollmentId", deleteEnrollment)

export default enrollmentRouter;