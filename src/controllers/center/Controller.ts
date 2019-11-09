import { Request, Response, NextFunction } from 'express';

import { SystemResponse, filterDefinedObject, toInt, MESSAGE } from '../../libs';
import { centerRepository, ICenterData, ICenterConditions, IOptions } from '../../repositories';

class CenterController {
  public async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await centerRepository.createAll(req.body);
      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.create}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name, address } = req.body;
      const data: ICenterData = { code, name, address };
      const conditions: ICenterConditions = { code };

      const isCenterExist = await centerRepository.findOne(conditions);

      if (isCenterExist) {
        throw SystemResponse.badRequestError(`Center ${MESSAGE.FAILURE_RESPONSE.alreadyExistCode}`);
      }

      const result = await centerRepository.create(data);
      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.create}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name, address, projection, limit, skip } = req.query;

      const conditions: ICenterConditions = filterDefinedObject({ code, name, address });
      const options: IOptions = toInt({ limit, skip });

      const result = await centerRepository.find(conditions, projection, options);

      if (!result.length) {
        throw SystemResponse.badRequestError(MESSAGE.FAILURE_RESPONSE.notFound);
      }

      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.fetch}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { code },
        query: { limit, skip, projection },
      } = req;

      const conditions: ICenterConditions = { code };
      const options: IOptions = toInt({ limit, skip });

      const result = await centerRepository.findOne(conditions, projection, options);

      if (!result) {
        throw SystemResponse.badRequestError(MESSAGE.FAILURE_RESPONSE.notFound);
      }

      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.fetch}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { code },
        body: { dataToUpdate },
      } = req;

      const conditions: ICenterConditions = { code };
      const isCenterExist = await centerRepository.findOne(conditions);

      if (!isCenterExist) {
        throw SystemResponse.badRequestError(`Center ${MESSAGE.FAILURE_RESPONSE.doesNotExistCode}`);
      }

      const result = await centerRepository.update(conditions, dataToUpdate);
      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.update}`, result));
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.params;
      const conditions: ICenterConditions = { code };

      const isCenterExist = await centerRepository.findOne(conditions);

      if (!isCenterExist) {
        throw SystemResponse.badRequestError(`Center ${MESSAGE.FAILURE_RESPONSE.doesNotExistCode}`);
      }

      const result = await centerRepository.delete(conditions);
      res.send(SystemResponse.success(`Center ${MESSAGE.SUCCESS_RESPONSE.delete}`, result));
    } catch (err) {
      next(err);
    }
  }
}

export default new CenterController();
