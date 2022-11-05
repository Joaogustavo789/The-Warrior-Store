import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public controllerPostUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = req.body;
    const token = this.usersService.createToken(users);
    await this.usersService.servicePostUsers(users);
    return res.status(201).json({ token });
  };
}

export default UsersController;
