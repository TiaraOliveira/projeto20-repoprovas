import {Router} from "express";
import signUpRouter from "./signUpRouter";
import signInRouter from "./signInRouter";
import addtestRouter from "./addTestRouter";
import testdisciplineRouter from "./viewTestByDisciplineRouter";
import testTeacherRouter from "./viewTestbyTeacherRouter";

const router = Router();

router.use(signInRouter);
router.use(signUpRouter);
router.use(addtestRouter)
router.use(testdisciplineRouter)
router.use(testTeacherRouter)

export default router;  