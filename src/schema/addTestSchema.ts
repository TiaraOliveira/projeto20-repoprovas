import Joi from "joi";
import { CreateTestData } from "../types/testTypes";

const addTestSchema = Joi.object<CreateTestData>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().required(),
    category:Joi.string().required(),
    discipline:Joi.string().required(),
    teacher:Joi.string().required()
});

export default addTestSchema;