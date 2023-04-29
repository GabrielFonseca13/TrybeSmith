import jwt from 'jsonwebtoken';
import { User } from '../../interfaces';

const secretKey: string = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

function generateToken(payload<User>) {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const validateToken = (token) => {
  if (!token) {
    return {
      error: {
        code: 'tokenNotFound',
        message: 'Token not found',
      },
    };
  }

  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

// const decodeToken = (token) => {
//   if (!token) throw 'Falta o token';
//   const decoded = jwt.decode(token, secretKey);
//   return decoded;
// }

module.exports = {
  generateToken,
  validateToken,
  // decodeToken
};