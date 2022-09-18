import {Request, Response } from "express";
import * as testDisciplineService from "../services/testDisciplineService"

export async function viewTestByDiscipline(req: Request, res: Response) {
  
  
 
  
    const testDiscipline = await testDisciplineService.viewTestDiscipline();
  
    res.status(200).send(testDiscipline);
  }
  