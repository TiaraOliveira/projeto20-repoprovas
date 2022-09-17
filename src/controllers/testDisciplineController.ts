import {Request, Response } from "express";
import * as testDisciplineService from "../services/testDisciplineService"

export async function viewTestByDiscipline(req: Request, res: Response) {
  
  
    const disciplineId: number = Number(req.params.id);
  
    const testDiscipline = await testDisciplineService.viewTestDiscipline(disciplineId);
  
    res.status(200).send(testDiscipline);
  }
  