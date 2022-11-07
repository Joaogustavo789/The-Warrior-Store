import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public controllerOrdersGetAll = async (_req: Request, res: Response): Promise<Response> => {
    const ordersGetAll = await this.ordersService.serviceOrdersGetAll();
    return res.status(200).json(ordersGetAll);
  };
}

export default OrdersController;
