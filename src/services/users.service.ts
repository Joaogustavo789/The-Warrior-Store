import jsonwebtoken from 'jsonwebtoken';
import IUsers from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

class UsersService {
  public model: UsersModel;

  public jwt = jsonwebtoken;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public createToken(users: IUsers) {
    const data = { username: users.username, classe: users.classe, level: users.level };
    return this.jwt.sign(data, process.env.JWT_SECRET as string, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
  }

  public async servicePostUsers(users: IUsers): Promise<IUsers> {
    const usersService = await this.model.postModelUsers(users);
    return usersService;
  }
}

export default UsersService;
