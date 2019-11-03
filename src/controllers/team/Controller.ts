import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, SUCCESS_RESPONSE } from '../../libs';
import { teamRepository, ITeamData, ITeamConditions, IOptions } from '../../repositories';

class TeamController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        fatherHusbandName,
        sex,
        maritalStatus,
        religion,
        category,
        dateOfBirth,
        placeOfBirth,
        occupation,
        policeStation,
        physicalStatus,
        email,
        phone,
        address,
        state,
        pincode,
        aadhaar,
        pan,
      } = req.body;
  
      const data: ITeamData = {
        name,
        fatherHusbandName,
        sex,
        maritalStatus,
        religion,
        category,
        dateOfBirth,
        placeOfBirth,
        occupation,
        policeStation,
        physicalStatus,
        email,
        phone,
        address,
        state,
        pincode,
        aadhaar,
        pan
      }
  
      const result = await teamRepository.create(data);
      res.status(201).send(successHandler(`Team ${SUCCESS_RESPONSE.create}`, 201, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        params: { id },
        query: {
          name,
          fatherHusbandName,
          sex,
          maritalStatus,
          religion,
          category,
          dateOfBirth,
          placeOfBirth,
          occupation,
          policeStation,
          physicalStatus,
          state,
          pincode,
          email,
          phone,
          projection,
          limit,
          skip
        }
      } = req;

      const conditions: ITeamConditions = filterDefinedObject({
        name,
        fatherHusbandName,
        sex,
        maritalStatus,
        religion,
        category,
        dateOfBirth,
        placeOfBirth,
        occupation,
        policeStation,
        physicalStatus,
        state,
        pincode,
        email,
        phone,
      });
      conditions.originalId = id;
      const options: IOptions = toInt({ limit, skip });

      const result = await teamRepository.find(conditions, projection, options);
      res.status(200).send(successHandler(`Team ${SUCCESS_RESPONSE.fetch}`, 200, result));
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
  
      const conditions: ITeamConditions = { originalId: id };
      const result = await teamRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Team ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const conditions: ITeamConditions = { originalId: req.params.id };

      const result = await teamRepository.delete(conditions);
      res.status(200).send(successHandler(`Team ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new TeamController();
