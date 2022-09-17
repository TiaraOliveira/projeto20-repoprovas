import createToken from "../utils/createToken";
import {Request, Response } from "express";

export default async function signIn(req: Request, res: Response){
    const query = res.locals.query;
    try{
        const token = createToken(query);
        return res.status(201).send({token: token});
    } catch(error){
        return res.status(500).send(error)
    }
};