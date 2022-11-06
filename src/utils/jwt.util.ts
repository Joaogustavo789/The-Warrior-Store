import jwt from 'jsonwebtoken';
import IUsers from '../interfaces/users.interface';

const createToken = (users: IUsers[]) => {
  const data = { username: users[0].username, classe: users[0].classe, level: users[0].level };
  return jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
};

export default createToken;
