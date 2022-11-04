import IProduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/product.model';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async servicePostProducts(product: IProduct): Promise<IProduct> {
    const productService = this.model.postModelProduct(product);
    return productService;
  }
}

export default ProductsService;