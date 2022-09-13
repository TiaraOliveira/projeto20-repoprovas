import { Router } from "express";
import { schemaValidator}  from "../middleware/schemaValidator";
import signSchema from "../schema/signSchema";
import signInValidator from "../middleware/signInValidator";
import signIn from "../controllers/signInController";

const signInRouter = Router();

signInRouter.post('/signin', schemaValidator(signSchema), signInValidator, signIn);

export default signInRouter;