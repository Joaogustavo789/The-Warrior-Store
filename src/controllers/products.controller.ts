import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public postProducts = async (req: Request, res: Response): Promise<void> => {
    const products = req.body;
    const newProduct = await this.productsService.servicePostProducts(products);
    res.status(201).json(newProduct);
  };
}

export default ProductsController;
