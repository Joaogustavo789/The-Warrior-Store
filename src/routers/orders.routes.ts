import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.controllerOrdersGetAll);

export default ordersRouter;
