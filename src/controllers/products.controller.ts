import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public postProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = req.body;
    const newProduct = await this.productsService.servicePostProducts(products);
    return res.status(201).json(newProduct);
  };

  public getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
    const productsGet = await this.productsService.serviceGetAllProducts();
    return res.status(200).json(productsGet);
  };
}

export default ProductsController;
