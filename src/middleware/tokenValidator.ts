import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response } from "express";

export default async function validateUser(req: Request, res: Response, next: NextFunction) {
  
    const authorization = req.headers['authorization'];

    if(!authorization){

        return res.sendStatus(401)
     
    }
    const token = authorization.split(' ')[1]

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
   
    if (token) {
        return jwt.verify(token, SECRET, function(err) {
            if (err) {
                return res.status(401).send("Invalid or non existing token, unauthorized.");
            }
            
                     

            const id = jwt.verify(token, SECRET)
            res.locals.userId = id;

            return next();
        });
    }
    return res.status(400).send("Invalid or non existing token, unauthorized.")
}
