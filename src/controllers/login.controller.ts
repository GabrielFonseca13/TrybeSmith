import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const { status, message } = await loginService.login(username, password);
  if (status === 401) {
    return res.status(status).json({ message });
  }
  return res.status(status).json({ token: message });
}

export default {
  login,
};