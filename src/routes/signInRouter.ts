import { Router } from "express";
import { schemaValidator}  from "../middleware/schemaValidator";
import signInSchema from "../schema/signInSchema";
import signInValidator from "../middleware/signInValidator";
import signIn from "../controllers/signInController";

const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signInSchema), signInValidator, signIn);

export default signInRouter;