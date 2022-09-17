import { Router } from "express";
import { schemaValidator}  from "../middleware/schemaValidator";
import addTestSchema from "../schema/addTestSchema";
import validateUser from "../middleware/tokenValidator"
import { addtest } from "../controllers/addtestController";

const addtestRouter = Router();

addtestRouter.post('/addtest', validateUser, schemaValidator(addTestSchema), addtest);

export default addtestRouter;