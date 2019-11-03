import { Request, Response, NextFunction } from 'express';

import { successHandler, filterDefinedObject, toInt, SUCCESS_RESPONSE } from '../../libs';
import { memberRepository, IMemberData, IMemberConditions, IOptions } from '../../repositories';

class MemberController {
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
        amount,
      } = req.body;

      const data: IMemberData = {
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
        amount,
      }
  
      const result = await memberRepository.create(data);
      res.status(201).send(successHandler(`Member ${SUCCESS_RESPONSE.create}`, 201, result));
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
          skip,
        }
      } = req;

      const conditions: IMemberConditions = filterDefinedObject({
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

      const result = await memberRepository.read(conditions, projection, options);
      res.status(200).send(successHandler(`Member ${SUCCESS_RESPONSE.fetch}`, 200, result));
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
  
      const conditions: IMemberConditions = { originalId: id };

      const result = await memberRepository.update(conditions, dataToUpdate);
      res.status(200).send(successHandler(`Member ${SUCCESS_RESPONSE.update}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const conditions: IMemberConditions = { originalId: req.params.id };
      const result = await memberRepository.delete(conditions);
      res.status(200).send(successHandler(`Member ${SUCCESS_RESPONSE.delete}`, 200, result));
    } catch ({ error, message, status }) {
      next({ error, message, status });
    }
  }
}

export default new MemberController();
