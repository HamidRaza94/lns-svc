import { Request, Response, NextFunction } from 'express';

class TestController {
  public async create(req: Request, res: Response, next: NextFunction) {
    const excel = req.body;
  }
}

export default new TestController();
