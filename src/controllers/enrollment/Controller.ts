import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, MESSAGE } from '../../libs';
import { enrollmentRepository, IEnrollmentData, IEnrollmentConditions, IOptions } from '../../repositories';

class EnrollmentController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        fatherName,
        sex,
        maritalStatus,
        dateOfBirth,
        placeOfBirth,
        category,
        religion,
        occupation,
        physicalStatus,
        email,
        phone,
        policeStation,
        state,
        pincode,
        address,
        aadhaar,
        pan,
        photo,
        sign,
        paymentId,
      } = req.body;

      const data: IEnrollmentData = {
        name,
        fatherName,
        sex,
        maritalStatus,
        dateOfBirth,
        placeOfBirth,
        category,
        religion,
        occupation,
        physicalStatus,
        email,
        phone,
        policeStation,
        state,
        pincode,
        address,
        aadhaar,
        pan,
        photo,
        sign,
        paymentId,
      }

      const result = await enrollmentRepository.create(data);
      res.status(201).send(successHandler(`Enrollment ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async bulkCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body.map(({ name, fatherHusbandName, address, phone }) => ({
        name,
        fatherHusbandName,
        address,
        phone,
      }));

      const result = await enrollmentRepository.bulkCreate(data);
      res.status(201).send(successHandler(`Enrollment ${MESSAGE.SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        query: { name, fatherHusbandName, phone, projection, limit, skip },
      } = req as any;

      const conditions: IEnrollmentConditions = filterDefinedObject({ name, fatherHusbandName, phone });
      conditions.originalId = id;
      const options: IOptions = toInt({ limit, skip });

      const result = await enrollmentRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Enrollment ${MESSAGE.SUCCESS_RESPONSE.fetch}`, 200, result));
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

      const conditions: IEnrollmentConditions = { originalId: id };

      const result = await enrollmentRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Enrollment ${MESSAGE.SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { id } } = req;
      const conditions: IEnrollmentConditions = { originalId: id };

      const result = await enrollmentRepository.delete(conditions);
      res.status(200).send(successHandler(`Enrollment ${MESSAGE.SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new EnrollmentController();
