import Iorders from '../interfaces/orders.interafce';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async serviceOrdersGetAll(): Promise<Iorders[]> {
    const ordersService = this.model.modelOrdersGetAll();
    return ordersService;
  }
}

export default OrdersService;
