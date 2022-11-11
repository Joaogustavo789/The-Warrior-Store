import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrders from '../interfaces/orders.interface';

class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async modelOrdersGetAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute(
      `SELECT Ord.id, Ord.userId, JSON_ARRAYAGG(Pro.id) as productsIds
      FROM Trybesmith.Orders as Ord
      INNER JOIN Trybesmith.Products as Pro
      ON Ord.id = Pro.orderId
      GROUP BY Ord.id;`,
    );
    return result as IOrders[];
  }

  public async modelOrdersPost(orders: IOrders): Promise<number> {
    const { userId } = orders;
    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }

  public async modelOrdersPut(id: number, orderId: number) {
    const result = await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, id],
    );
    return result;
  }
}

export default OrdersModel;
