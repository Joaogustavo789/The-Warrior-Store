import ILogin from '../../interfaces/login.interface';
import { userNameSchema, passwordSchema } from './schemas';

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

export default verifyLogin;
