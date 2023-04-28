import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export default {
  create,
};