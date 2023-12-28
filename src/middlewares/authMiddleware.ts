import { Request, Response, NextFunction, Application } from 'express';
import { JwtPayload } from 'jsonwebtoken';

import { verifyToken } from '../libs/utils/encrypt';
import { ROLES } from '../libs/constants';

interface ITokenData extends JwtPayload {
  firstName: string,
  lastName: string,
  role: ROLES,
  username: string,
}

interface IApp extends Application {
  locals: {
    user: ITokenData,
  },
}

export interface IUserAuthInfoRequest extends Request {
  app: IApp
}

export const authenticate = (req: Request, _: Response, next: NextFunction) => {
  try {
    const token = req.header('authorization') ? req.header('authorization').split(' ')[1] : '';

    if (!token) {
      console.error('authMiddleware :: authenticate :: missing token');
      throw {
        error: '301',
        message: 'Authentication Failed',
        status: 401,
      };
    }

    try {
      const verifiedToken = verifyToken(token);

      if (!verifiedToken) { throw '' }

      req.app.locals.user = verifiedToken;
    } catch (err) {
      console.error('authMiddleware :: authenticate :: token expired');
      throw {
        error: '301',
        message: 'Authentication Failed',
        status: 401,
      };
    }

    next();
  } catch (err) {
    next(err);
  }
};

export const authorize = (role: ROLES) => (req: IUserAuthInfoRequest, _: Response, next: NextFunction) => {
  try {
    if (!req.app.locals.user) {
      console.error('authMiddleware :: authorize :: missing token');

      throw {
        error: '301',
        message: 'Authentication Failed',
        status: 401,
      };
    }

    const { user } = req.app.locals;

    if (user.role !== ROLES.ADMIN && user.role !== role) {
      throw {
        error: '302',
        message: 'You are not authorized to access the api',
        status: 401,
      };
    }

    next();
  } catch (err) {
    next(err);
  }
};
