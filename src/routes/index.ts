import {Router} from "express";
import signUpRouter from "./signUpRouter";
import signInRouter from "./signInRouter";

const router = Router();

router.use(signInRouter);
router.use(signUpRouter);


export default router;  