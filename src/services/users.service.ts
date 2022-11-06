import IUsers from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async servicePostUsers(users: IUsers): Promise<IUsers> {
    const usersService = await this.model.postModelUsers(users);
    return usersService;
  }
}

export default UsersService;
