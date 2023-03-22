import { Request, Response } from "express";
import * as courseService from "../services/courseServises.js";

export async function createCourse(req: Request, res: Response){
    const data = req.body;
    const course = await courseService.insertCourse(data);
    res.status(201).send(course);
}

export async function getAllCoursesbyCollege(req: Request, res: Response){
    const courses = await courseService.getAllCoursesByCollege(parseInt(req.params.id));
    res.status(200).send(courses);
}