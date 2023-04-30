import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import { config, secret } from '../middlewares/jwtConfig';
// import { ReturnReq, ReturnReqLogin } from '../interfaces';

async function login(username: string, password: string) {
  const user = await userModel.getByUsername(username);
  if (!user || user.password !== password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const token = jwt.sign({ username: user.username }, secret, config);

  return { status: 200, message: token };
}

export default {
  login,
};