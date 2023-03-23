import { Request, Response } from "express";
import * as courseService from "../services/courseServices.js";
import { checkInteger } from "../utils/checkInteger.js";

export async function createCourse(req: Request, res: Response){
    const data = req.body;
    const course = await courseService.insertCourse(data);
    res.status(201).send(course);
}

export async function getAllCoursesbyCollege(req: Request, res: Response){
    await checkInteger(req.params.id);
    const courses = await courseService.getAllCoursesByCollege(parseInt(req.params.id));
    res.status(200).send(courses);
}

export async function updateCourse(req: Request, res: Response){
    const data = req.body;
    const collegeId = await checkInteger(req.params.id);
    const course = await courseService.updateCourse(data, collegeId);
    res.status(200).send(course);
}

export async function deleteCourse(req: Request, res: Response){
    const courseId = await checkInteger(req.params.id);
    await courseService.deleteCourse(courseId);
    res.sendStatus(200);
}

export async function getStudentsByCourse(req: Request, res: Response){
    const courseId = await checkInteger(req.params.id);
    const students = await courseService.getStudentsByCourseId(courseId);
    res.status(200).send(students);
}