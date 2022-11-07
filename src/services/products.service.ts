import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/product.model';
import { verifyProduct } from './validations/validations.inputs';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async servicePostProducts(product: IProduct) {
    const error = await verifyProduct(product);

    if (error.type) {
      return error;
    }

    const productService = await this.model.postModelProduct(product);
    
    return { type: null, message: productService };
  }

  public async serviceGetAllProducts(): Promise<IProduct[]> {
    const productService2 = await this.model.getAllModelProduct();
    return productService2;
  }
}

export default ProductsService;
