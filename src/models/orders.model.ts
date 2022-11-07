import { Pool } from 'mysql2/promise';
import Iorders from '../interfaces/orders.interafce';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async modelOrdersGetAll(): Promise<Iorders[]> {
    const [result] = await this.connection.execute(
      `SELECT Ord.id, Ord.userId, JSON_ARRAYAGG(Pro.id) as productsIds
      FROM Trybesmith.Orders as Ord
      INNER JOIN Trybesmith.Products as Pro
      ON Ord.id = Pro.orderId
      GROUP BY Ord.id;`,
    );
    return result as Iorders[];
  }
}

export default OrdersModel;
