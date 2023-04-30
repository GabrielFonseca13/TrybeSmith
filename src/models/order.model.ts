import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

async function getAll(): Promise<Order[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT O.id AS "id", 
    O.user_id AS "userId", 
    JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.orders AS O
    INNER JOIN Trybesmith.products AS P
    ON O.id = P.order_id
    GROUP BY O.id;`,
  );

  return orders as Order[];
}

export default {
  getAll,
};