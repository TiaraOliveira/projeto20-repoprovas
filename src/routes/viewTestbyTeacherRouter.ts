import { Router } from "express";
import validateUser from "../middleware/tokenValidator";
import { viewTestByTeacher } from "../controllers/testTeacherController";



const testTeacherRouter = Router();

testTeacherRouter.get('/teachers', validateUser, viewTestByTeacher);

export default testTeacherRouter;