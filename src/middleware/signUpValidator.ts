import { getUserByEmail } from "../repositories/usersRepositories";
import {NextFunction, Request, Response } from "express";

export default async function signUpValidator(req: Request, res: Response, next: NextFunction){
   
    const body = req.body;
  
    const email = await getUserByEmail(body.email);
    if(email) throw {type: "error_conflict",  message: `Email Já cadastrado`}

    next();
};