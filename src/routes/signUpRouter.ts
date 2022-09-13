import { Router } from "express";
import  {schemaValidator } from "../middleware/schemaValidator";
import signSchema from "../schema/signSchema";
import signUpValidator from "../middleware/signUpValidator";
import signUp from "../controllers/signUpController";



const signUpRouter = Router();

signUpRouter.post('/signup', schemaValidator(signSchema), signUpValidator, signUp);

export default signUpRouter;