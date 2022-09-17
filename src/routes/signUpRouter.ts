import { Router } from "express";
import  {schemaValidator } from "../middleware/schemaValidator";
import signUpSchema from "../schema/signUpSchema";
import signUpValidator from "../middleware/signUpValidator";
import signUp from "../controllers/signUpController";



const signUpRouter = Router();

signUpRouter.post('/signup', schemaValidator(signUpSchema), signUpValidator, signUp);

export default signUpRouter;