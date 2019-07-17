import { Request, Response, NextFunction } from 'express';

import { grievanceMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class GrievanceController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        fatherName,
        sex,
        maritalStatus,
        dateOfBirth,
        aadhaar,
        religion,
        category,
        address,
        email,
        phone,
        policeStation,
        state,
        pincode,
        placeOfIncident,
        dateTimeIncident,
        summary,
      } = req.body;

      const data = {
        name,
        fatherName,
        sex,
        maritalStatus,
        dateOfBirth,
        aadhaar,
        religion,
        category,
        address,
        email,
        phone,
        policeStation,
        state,
        pincode,
        placeOfIncident,
        dateTimeIncident,
        summary,
      }

      const result = await grievanceMiddleware.create(data);
      res.status(201).send(successHandler('Successfully Created', 201, result));
    } catch ({ error, message, status }) {
      next({
        error,
        message,
        status
      });
    }
  }
}

export default new GrievanceController();
