import {Request, Response } from "express";
import * as testTeacherService from "../services/testTeacherService"

export async function viewTestByTeacher(req: Request, res: Response) {
    
 
  
    const testTeacher = await testTeacherService.viewTestTeacher();
  
    res.status(200).send(testTeacher);
  }
  