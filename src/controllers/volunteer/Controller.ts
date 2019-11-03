import { Request, Response, NextFunction } from 'express';

import { successHandler } from '../../libs';

class VolunteerController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = 'result';
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
      const result = 'result';
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

export default new VolunteerController();
