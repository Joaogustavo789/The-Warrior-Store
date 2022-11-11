import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', ordersController.controllerOrdersGetAll);

ordersRouter.post('/', validateToken, ordersController.controllerOrdersPost);

export default ordersRouter;
