import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.post('/', productsController.postProducts);

productRouter.get('/', productsController.getAllProducts);

export default productRouter;
