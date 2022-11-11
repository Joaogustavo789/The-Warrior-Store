import IOrders from '../interfaces/orders.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import { verifyProductsIds } from './validations/validations.inputs';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async serviceOrdersGetAll(): Promise<IOrders[]> {
    const ordersService = this.model.modelOrdersGetAll();
    return ordersService;
  }

  public async serviceOrdersPost(orders: IOrders) {
    const error = await verifyProductsIds(orders.productsIds);
    
    if (error.type) {
      return error;
    }
    
    const orderId = await this.model.modelOrdersPost(orders);
    const updatedProducts = orders.productsIds.map(async (productsId) => (
      this.model.modelOrdersPut(productsId, orderId)
    ));
    await Promise.all(updatedProducts);
    
    return { type: null, message: orders };
  }
}

export default OrdersService;
