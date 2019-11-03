import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, SUCCESS_RESPONSE } from '../../libs';
import { courseRepository, ICourseData, ICourseConditions, IOptions } from '../../repositories';

class CourseController {
  public async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await courseRepository.createAll(req.body);
      res.status(201).send(successHandler(`Course ${SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name } = req.body;
      const data: ICourseData = { code, name };

      const result = await courseRepository.create(data);
      res.status(201).send(successHandler(`Course ${SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, name, limit, skip, projection } = req.query;

      const conditions: ICourseConditions = filterDefinedObject({ code, name });
      const options: IOptions = toInt({ limit, skip });

      const result = await courseRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.fetch}`, 200, result));
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

      const conditions: ICourseConditions = { code };
      const options: IOptions = toInt({ limit, skip });

      const result = await courseRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.fetch}`, 200, result));
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

      const conditions: ICourseConditions = { originalId: id };

      const result = await courseRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async updateByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { code },
        body: { dataToUpdate },
      } = req;

      const conditions: ICourseConditions = { code };

      const result = await courseRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { id } } = req;
      const conditions: ICourseConditions = { originalId: id };

      const result = await courseRepository.delete(conditions);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async deleteByCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { code } } = req;
      const conditions: ICourseConditions = { code };

      const result = await courseRepository.delete(conditions);
      res.status(200).send(successHandler(`Course ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new CourseController();
