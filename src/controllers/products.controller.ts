import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public postProducts = async (req: Request, res: Response): Promise<Response> => {
    const products = req.body;
    const { type, message } = await this.productsService.servicePostProducts(products);

    if (type === 'BAD_REQUEST') {
      return res.status(400).json({ message });
    }

    if (type === 'INVALID_VALUE') {
      return res.status(422).json({ message });
    }

    return res.status(201).json(message);
  };

  public getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
    const productsGet = await this.productsService.serviceGetAllProducts();
    return res.status(200).json(productsGet);
  };
}

export default ProductsController;
