import Joi from "joi";

const signSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  password_confirmation: Joi.any().valid(Joi.ref('password')).required()
});

export default signSchema;