import { NextFunction, Request, Response } from "express";


export function schemaValidator(schema:any) {
  
  return (req: Request, res: Response, next:NextFunction) => { 
    console.log("esquma")
      const body = req.body; 
     console.log(body)
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        return res.status(422).send(error.details.map((detail: { message: any; }) => detail.message));
      }
  
      next();
    }
  }