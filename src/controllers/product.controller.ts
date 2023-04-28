import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  const product = req.body as IProduct;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export default {
  create,
};