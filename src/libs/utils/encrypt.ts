import { hash, compare } from 'bcrypt';
import { sign, JwtPayload, SignOptions, verify } from 'jsonwebtoken';

import config from '../../config';

export const generateHash = async (value: string, saltRounds = 10) => {
  try {
    return await hash(value, saltRounds);
  } catch (err) {
    console.error('ENCRYPT :: generateHash :: ', err);
    throw {
      error: 'E101',
      message: 'Error while encrypting the value',
      status: 500,
    };
  }
};

export const compareHash = async (value: string, hashedValue: string) => {
  try {
    return await compare(value, hashedValue);
  } catch (err) {
    console.error('ENCRYPT :: compareHash :: ', err);
    throw {
      error: 'E102',
      message: 'Error while validating the hashed data',
      status: 500,
    };
  }
};

export const generatedToken = (payload: JwtPayload) => {
  const { JWT_SECRET_KEY } = config;

  const settings: SignOptions = {
    expiresIn: '1h'
  };

  return sign(payload, JWT_SECRET_KEY, settings);
};

export const verifyToken = (token: string) => {
  const { JWT_SECRET_KEY } = config;

  return verify(token, JWT_SECRET_KEY);
};
