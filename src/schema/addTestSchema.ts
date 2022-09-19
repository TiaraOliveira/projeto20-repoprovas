import Joi from "joi";
import { CreateTestData } from "../types/testTypes";

const addTestSchema = Joi.object<CreateTestData>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().pattern(new RegExp('^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?(.pdf)$')).required(),
    category:Joi.string().required(),
    discipline:Joi.string().required(),
    teacher:Joi.string().required()
});

export default addTestSchema;