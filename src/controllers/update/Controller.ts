import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, MESSAGE } from '../../libs';
import { updateRepository, IUpdateData, IUpdateConditions, IOptions } from '../../repositories';

class UpdateController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, headline, description } = req.body;
      const updateData: IUpdateData = { type, headline, description }

      const result = await updateRepository.create(updateData);
      res.status(201).send(successHandler(`Update ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { type },
        query: { projection, limit, skip }
      } = req as any;

      const conditions: IUpdateConditions = filterDefinedObject({ type });
      const options: IOptions = toInt({ limit, skip });

      const result = await updateRepository.find(conditions, projection, options);
      res.status(200).send(successHandler(`Update ${MESSAGE.SUCCESS_RESPONSE.fetch}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        body: { dataToUpdate },
      } = req;

      const conditions: IUpdateConditions = { originalId: id };

      const result = await updateRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Update ${MESSAGE.SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const conditions: IUpdateConditions = { originalId: req.params.id };

      const result = await updateRepository.delete(conditions);
      res.status(200).send(successHandler(`Update ${MESSAGE.SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new UpdateController();
