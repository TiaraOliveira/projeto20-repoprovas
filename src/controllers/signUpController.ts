import { createUser } from "../repositories/usersRepositories";
import passwordEncrypter from "../utils/passwordEncrypter";
import {Request, Response } from "express";

export default async function signUp(req: Request, res: Response){
    
    const {email, password, userName, pictureUrl} = req.body;
    const secret = passwordEncrypter(password);
    const user = {email, password: secret, userName, pictureUrl};

    try{
        await createUser(user);
        return res.sendStatus(201);
    } catch(error) {
        return res.status(500).send(error);
    }
};
