import { Router } from "express";
import validateUser from "../middleware/tokenValidator";
import { viewTestByDiscipline } from "../controllers/testDisciplineController";



const testdisciplineRouter = Router();

testdisciplineRouter.get('/discipline', validateUser, viewTestByDiscipline);

export default testdisciplineRouter;