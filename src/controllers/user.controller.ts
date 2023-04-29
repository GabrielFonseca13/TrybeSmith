import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);
  res.status(status).json({ token: data });
}

export default {
  create,
};