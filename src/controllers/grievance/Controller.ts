import { Request, Response, NextFunction } from 'express';

import { successHandler } from '../../libs';

class GrievanceController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('grievance>>>>', req.body);
      res.status(201).send(successHandler('Successfully Created', 201, req.body));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new GrievanceController();
