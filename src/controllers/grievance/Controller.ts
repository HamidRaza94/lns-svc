import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, SUCCESS_RESPONSE } from '../../libs';
import {
  enrollmentRepository,
  grievanceRepository,
  IEnrollmentData,
  IGrievanceData,
  IGrievanceConditions,
  IOptions,
} from '../../repositories';

class GrievanceController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { enrollmentId } = req.params;

      const {
        placeOfIncident,
        dateTimeIncident,
        summary,
      } = req.body;

      let attachment: any;

      if (req.file) {
        attachment = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        }
      }

      if (enrollmentId) {
        const grievanceData: IGrievanceData = {
          enrollmentId,
          placeOfIncident,
          dateTimeIncident,
          summary,
          attachment,
        }

        const result = await grievanceRepository.create(grievanceData);
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

        const enrollmentData: IEnrollmentData = {
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

        const enrollmentResult = await enrollmentRepository.create(enrollmentData);
        if (enrollmentResult) {
          const grievanceData: IGrievanceData = {
            enrollmentId: enrollmentResult.originalId,
            placeOfIncident,
            dateTimeIncident,
            summary,
            attachment,
          }

          const result = await grievanceRepository.create(grievanceData);
          res.status(201).send(successHandler(`Grievance ${SUCCESS_RESPONSE.create}`, 201, result));
        }
      }
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        query: { placeOfIncident, dateTimeIncident, projection, limit, skip },
      } = req;

      const conditions: IGrievanceConditions = filterDefinedObject({ placeOfIncident, dateTimeIncident });
      conditions.originalId = id;
      const options: IOptions = toInt({ limit, skip });

      const result = await grievanceRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Grievance ${SUCCESS_RESPONSE.fetch}`, 200, result));
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

      const result = await grievanceRepository.update({ originalId: id }, dataToUpdate);
      res.status(200).send(successHandler(`Grievance ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { id } } = req;

      const result = await grievanceRepository.delete({ originalId: id });
      res.status(200).send(successHandler(`Grievance ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new GrievanceController();
