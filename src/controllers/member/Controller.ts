import { Request, Response, NextFunction } from 'express';

import { memberMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class MemberController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await memberMiddleware.create(req);
      res.status(201).send(successHandler('Successfully Created', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await memberMiddleware.read(req);
      res.status(200).send(successHandler('Successfully Fetched', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await memberMiddleware.update(req);
      res.status(201).send(successHandler('Successfully Updated', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await memberMiddleware.delete(req);
      res.status(200).send(successHandler('Successfully Fetched', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new MemberController();
