import { Request, Response, NextFunction } from 'express';

import { enrollmentMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class EnrollmentController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        enrollmentId,
        name,
        fatherHusbandName,
        address,
      } = req.body;

      const data = {
        enrollmentId,
        name,
        fatherHusbandName,
        address,
      }

      const result = await enrollmentMiddleware.create(data);
      res.status(201).send(successHandler('Successfully Enrolled', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status,
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        body: { conditions, projection },
        query: { limit, skip },
      } = req;

      const options = {
        limit: parseInt(limit),
        skip: parseInt(skip),
      }

      const newConditions = { ...conditions };

      if (id) {
        newConditions.originalId = id;
      }

      const result = await enrollmentMiddleware.read(newConditions, projection, options);
      res.status(200).send(successHandler('Successfully Read', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status,
      })
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        body: { dataToUpdate },
      } = req;

      const result = await enrollmentMiddleware.update({ originalId: id }, dataToUpdate);
      res.status(200).send(successHandler('Successfully Updated', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status,
      })
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { id } } = req;

      const result = await enrollmentMiddleware.delete({ originalId: id });
      res.status(200).send(successHandler('Successfully Deleted', 200, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status,
      })
    }
  }
}

export default new EnrollmentController();
