import ILogin from '../../interfaces/login.interface';
import IProduct from '../../interfaces/product.interface';
import { userNameSchema, passwordSchema, productSchema } from './schemas';

const verifyLogin = async ({ username, password }: ILogin) => {
  const { error } = userNameSchema.validate(username);

  if (error) {
    return { type: 'BAD_REQUEST', message: '"username" is required' };
  }

  const error2 = passwordSchema.validate(password);

  if (error2.error) {
    return { type: 'BAD_REQUEST', message: '"password" is required' };
  }

  return { type: null, message: '' };
};

const verifyProduct = async (product: IProduct) => {
  const { error } = productSchema.validate(product);
  console.log(error);
  
  if (error && error.details[0].message.includes('required')) {
    return { type: 'BAD_REQUEST', message: error.details[0].message };
  }
  
  if (error) {
    return { type: 'INVALID_VALUE', message: error.details[0].message };
  }

  return { type: null, message: '' };
};

export {
  verifyLogin,
  verifyProduct,
};
