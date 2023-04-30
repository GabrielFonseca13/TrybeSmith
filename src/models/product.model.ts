import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';
import { Product, IProduct } from '../interfaces';

async function create(product: IProduct): Promise<Product> {
  const { name, amount } = product;

  const query = `INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { ...product, id };
  return newProduct;
}

async function getAll(): Promise<Product[]> {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products as Product[];
}

export default {
  create,
  getAll,
};