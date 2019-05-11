import { Request } from 'express';

import {
  memberRepository,
  IMemberData,
  IMemberConditions,
  IMemberProjection,
  IMemberOptions,
} from '../../repositories';

class MemberMiddleware {
  public async create(req: Request) {
    const {
      body: {
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
    } = req;

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

    return result;
  }

  public async read(req: Request) {
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
        limit,
        skip
      }
    } = req;

    const conditions: IMemberConditions = {};
    const projection: IMemberProjection = {};
    const options: IMemberOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip),
    };

    if (id) {
      conditions.originalId = id;
    }

    if (name) {
      conditions.name = name;
    }

    if (fatherHusbandName) {
      conditions.fatherHusbandName = fatherHusbandName;
    }

    if (sex) {
      conditions.sex = sex;
    }

    if (maritalStatus) {
      conditions.maritalStatus = maritalStatus;
    }

    if (religion) {
      conditions.religion = religion;
    }

    if (category) {
      conditions.category = category;
    }

    if (dateOfBirth) {
      conditions.dateOfBirth = dateOfBirth;
    }

    if (placeOfBirth) {
      conditions.placeOfBirth = placeOfBirth;
    }

    if (occupation) {
      conditions.occupation = occupation;
    }

    if (policeStation) {
      conditions.policeStation = policeStation;
    }

    if (physicalStatus) {
      conditions.physicalStatus = physicalStatus;
    }

    if (email) {
      conditions.email = email;
    }

    if (phone) {
      conditions.phone = phone;
    }

    if (state) {
      conditions.state = state;
    }

    if (pincode) {
      conditions.pincode = pincode;
    }

    const result = await memberRepository.find(conditions, projection, options);

    return result;
  }

  public async update(req: Request) {
    const {
      body: { id, dataToUpdate },
    } = req;

    const conditions: IMemberConditions = { originalId: id };
    return await memberRepository.update(conditions, dataToUpdate);
  }

  public async delete(req: Request) {
    const {
      params: { id }
    } = req;

    const conditions: IMemberConditions = { originalId: id };
    return await memberRepository.delete(conditions);
  }
}

export default new MemberMiddleware();
