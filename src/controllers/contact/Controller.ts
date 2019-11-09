import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, MESSAGE } from '../../libs';
import { contactRepository, IContactData, IContactConditions, IOptions } from '../../repositories';

class ContactController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phone, comment } = req.body;
      const contactData: IContactData = { name, email, phone, comment }
      console.log('phone number is ', phone);

      const result = await contactRepository.create(contactData);
      res.status(201).send(successHandler(`Contact ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, phone, limit, skip, projection } = req.query;
      const conditions: IContactConditions = filterDefinedObject({ name, email, phone });
      const options: IOptions = toInt({ limit, skip });

      const result = await contactRepository.find(conditions, projection, options);
      res.status(200).send(successHandler(`Center ${MESSAGE.SUCCESS_RESPONSE.fetch}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new ContactController();
