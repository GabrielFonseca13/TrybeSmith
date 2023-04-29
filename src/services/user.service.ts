import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import userModel from '../models/user.model';
import { config, secret } from '../middlewares/jwtConfig';

async function create(user: IUser) {
  const data = await userModel.create(user);
  const token = jwt.sign(data, secret, config);

  return { status: 201, data: token };
}

export default {
  create,
};