import { Request, Response } from "express";
import * as addTestService from "../services/addTestService";

export async function addtest(req: Request, res: Response) {
  
  const test = req.body;
 
  await addTestService.insert(test);

  res.sendStatus(201);
}
