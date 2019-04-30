import { Request, Response, NextFunction } from 'express';

import {
  updateRepository,
  IUpdateData,
  IUpdateConditions,
  IUpdateProjection,
  IUpdateOptions
} from '../../repositories';
import { successHandler } from '../../libs';

class UpdateController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        body: { type, headline, description }
      } = req;

      const data: IUpdateData = {
        type,
        headline,
        description
      };

      const result = await updateRepository.create(data);
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
      const {
        params: { type },
        query: { limit, skip }
      } = req;

      const conditions: IUpdateConditions = {};

      if (type) {
        conditions.type = type;
      }

      const projection: IUpdateProjection = {};

      const options: IUpdateOptions = {
        limit: parseInt(limit),
        skip: parseInt(skip)
      };

      const result = await updateRepository.find(
        conditions,
        projection,
        options
      );
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
      const {
        body: { id, dataToUpdate }
      } = req;

      const conditions: IUpdateConditions = { originalId: id };
      const result = await updateRepository.update(conditions, dataToUpdate);
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
      const {
        params: { id }
      } = req;

      const conditions: IUpdateConditions = { originalId: id };
      const result = await updateRepository.delete(conditions);
      res.status(200).send(successHandler('Successfully Deleted', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new UpdateController();
