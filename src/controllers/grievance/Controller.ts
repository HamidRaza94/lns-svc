import { Request, Response, NextFunction } from 'express';

import { enrollmentMiddleware, grievanceMiddleware } from '../../middlewares';
import { successHandler } from '../../libs';

class GrievanceController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { enrollmentId } = req.params;

      const {
        placeOfIncident,
        dateTimeIncident,
        summary,
      } = req.body;

      const attachment = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      }

      if (enrollmentId) {
        const grievanceData = {
          enrollmentId,
          placeOfIncident,
          dateTimeIncident,
          summary,
          attachment,
        }

        const result = await grievanceMiddleware.create(grievanceData);
        res.status(201).send(successHandler('Successfully Registered Grievance', 201, result));
      } else {
        const {
          name,
          fatherName,
          sex,
          maritalStatus,
          dateOfBirth,
          aadhaar,
          religion,
          category,
          email,
          phone,
          address,
          policeStation,
          state,
          pincode,
        } = req.body;

        const enrollmentData = {
          name,
          fatherName,
          sex,
          maritalStatus,
          dateOfBirth,
          placeOfBirth: 'Not Provided',
          category,
          religion,
          occupation: 'Not Provided',
          physicalStatus: 'Not Provided',
          email,
          phone,
          policeStation,
          state,
          pincode,
          address,
          aadhaar,
          pan: 'Not Provided',
          photo: 'Not Provided',
          sign: 'Not Provided',
          paymentId: '',
        }

        const enrollmentResult = await enrollmentMiddleware.create(enrollmentData);
        if (enrollmentResult) {
          const grievanceData = {
            enrollmentId: enrollmentResult.originalId,
            placeOfIncident,
            dateTimeIncident,
            summary,
            attachment,
          }

          const result = await grievanceMiddleware.create(grievanceData);
          res.status(201).send(successHandler('Successfully Registered Grievance', 201, result));
        }
      }
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

      const result = await grievanceMiddleware.read(newConditions, projection, options);
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

      const result = await grievanceMiddleware.update({ originalId: id }, dataToUpdate);
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

      const result = await grievanceMiddleware.delete({ originalId: id });
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

export default new GrievanceController();
