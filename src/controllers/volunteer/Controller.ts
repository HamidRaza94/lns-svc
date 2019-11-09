import { Request, Response, NextFunction } from 'express';

import { SystemResponse, MESSAGE } from '../../libs';

class VolunteerController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = 'result';
      res.send(SystemResponse.success(`Volunteer ${MESSAGE.SUCCESS_RESPONSE.create}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const result = 'result';
      res.send(SystemResponse.success(`Volunteer ${MESSAGE.SUCCESS_RESPONSE.fetch}`, result));
    } catch (err) {
      next(err);
    }
  }
}

export default new VolunteerController();
