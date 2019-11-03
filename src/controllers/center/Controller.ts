import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, SUCCESS_RESPONSE } from '../../libs';
import { centerRepository, ICenterData, ICenterConditions, IOptions } from '../../repositories';

class CenterController {
  public async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await centerRepository.createAll(req.body);
      res.status(201).send(successHandler(`Center ${SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name, address } = req.body;
      const data: ICenterData = { code, name, address };

      const result = await centerRepository.create(data);
      res.status(201).send(successHandler(`Center ${SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name, address, projection, limit, skip } = req.query;

      const conditions: ICenterConditions = filterDefinedObject({ code, name, address });
      const options: IOptions = toInt({ limit, skip });

      const result = await centerRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.fetch}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async readByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { code },
        query: { limit, skip, projection },
      } = req;

      const conditions: ICenterConditions = { code };
      const options: IOptions = toInt({ limit, skip });

      const result = await centerRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.fetch}`, 200, result));
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

      const conditions: ICenterConditions = { originalId: id };

      const result = await centerRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status })
    }
  }

  public async updateByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { code },
        body: { dataToUpdate },
      } = req;

      const conditions: ICenterConditions = { code };

      const result = await centerRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status })
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const conditions: ICenterConditions = { originalId: req.params.id };

      const result = await centerRepository.delete(conditions);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status })
    }
  }

  public async deleteByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      const conditions: ICenterConditions = { code };

      const result = await centerRepository.delete(conditions);
      res.status(200).send(successHandler(`Center ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status })
    }
  }
}

export default new CenterController();
