import { Pool } from 'mysql2/promise';
import ILogin from '../interfaces/login.interface';
import IUsers from '../interfaces/users.interface';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async modelLogin(login: ILogin): Promise<IUsers[]> {
    const { username, password } = login;
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    
    return result as IUsers[];
  }
}

export default LoginModel;
