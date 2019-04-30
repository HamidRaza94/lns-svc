import { Request, Response, NextFunction } from 'express';

import {
  contactRepository,
  IContactData,
  IContactConditions,
  IContactProjection,
  IContactOptions
} from '../../repositories';
import { successHandler } from '../../libs';

class ContactController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        body: { name, email, phone, comment }
      } = req;

      const data: IContactData = {
        name,
        email,
        phone,
        comment
      };

      const result = await contactRepository.create(data);
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
        query: { name, email, phone, limit, skip }
      } = req;

      const conditions: IContactConditions = {};

      if (name) {
        conditions.name = name;
      }

      if (email) {
        conditions.email = email;
      }

      if (phone) {
        conditions.phone = phone;
      }

      const projection: IContactProjection = {};

      const options: IContactOptions = {
        limit: parseInt(limit),
        skip: parseInt(skip)
      };

      const result = await contactRepository.find(
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
}

export default new ContactController();
