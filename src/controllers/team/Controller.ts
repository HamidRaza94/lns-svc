import { Request, Response, NextFunction } from 'express';

import { teamMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class TeamController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await teamMiddleware.create(req.body);
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
      res.status(200).send(successHandler('Successfully Fetched', 200, ''));
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
      res.status(201).send(successHandler('Successfully Updated', 201, ''));
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
      res.status(200).send(successHandler('Successfully Fetched', 200, ''));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new TeamController();
