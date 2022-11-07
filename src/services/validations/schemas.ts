import Joi from 'joi';

const userNameSchema = Joi.string().required();
const passwordSchema = Joi.string().required();

const nameSchema = Joi.string().min(3).required();
const amountSchema = Joi.string().min(3).required();

const productSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

export {
  userNameSchema,
  passwordSchema,
  nameSchema,
  amountSchema,
  productSchema,
};
