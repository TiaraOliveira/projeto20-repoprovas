import {Router} from "express";
import signUpRouter from "./signUpRouter";
import signInRouter from "./signInRouter";
import addtestRouter from "./addTestRouter";
import testdisciplineRouter from "./viewTestByDisciplineRouter";

const router = Router();

router.use(signInRouter);
router.use(signUpRouter);
router.use(addtestRouter)
router.use(testdisciplineRouter)


export default router;  