import { Request, Response, NextFunction } from 'express';

import IError from './IError';

export default (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, message, status } = err;

  const errMsg = {
    error: error || 'Undefined',
    message: message || 'Error Ocurred',
    status: status || 500,
    timestamp: new Date()
  };

  res.status(errMsg.status).send(errMsg);
  next();
};
