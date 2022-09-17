import { getUserByEmail } from "../repositories/usersRepositories";
import passwordDecrypter from "../utils/passwordDecrypter"
import {NextFunction, Request, Response } from "express";

export default async function signInValidator(req: Request, res: Response, next: NextFunction){ 
    
    const body = req.body;  
   
        const result = await getUserByEmail(body.email);
        
        if(!result){
            throw {type: "error_not_found",  message: `Senha ou email invalidos`}
        } 
        const isValidPassword = passwordDecrypter(body.password, result.password);   
                 
        if(!isValidPassword){
            throw {type: "error_bad_request",  message: `Senha ou email invalidos`}
        }

       res.locals.query = result;
        next();

    } 

