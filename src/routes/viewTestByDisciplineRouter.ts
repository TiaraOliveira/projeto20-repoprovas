import { Router } from "express";
import validateUser from "../middleware/tokenValidator";
import { viewTestByDiscipline } from "../controllers/testDisciplineController";



const testdisciplineRouter = Router();

testdisciplineRouter.get('/discipline/:id/tests', validateUser, viewTestByDiscipline);

export default testdisciplineRouter;