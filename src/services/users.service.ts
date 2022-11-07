import IUsers from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { verifyUser } from './validations/validations.inputs';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async servicePostUsers(users: IUsers) {
    const error = await verifyUser(users);

    if (error.type) {
      return error;
    }

    const usersService = await this.model.postModelUsers(users);

    return { type: null, message: usersService };
  }
}

export default UsersService;
