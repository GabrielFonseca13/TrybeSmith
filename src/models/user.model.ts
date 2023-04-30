import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser, User } from '../interfaces';
import connection from './connection';

async function create(user: IUser): Promise<User> {
  const { username, vocation, level, password } = user;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId: id } = result;

  const newUser: User = { ...user, id };
  return newUser;
}

async function getByUsername(username: string): Promise<User | undefined> {
  const [[data]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username=?',
    [username],
  );
  return data as (User | undefined);
}

export default {
  create,
  getByUsername,
};