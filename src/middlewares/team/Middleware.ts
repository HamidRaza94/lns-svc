import { Request } from 'express';

import {
  teamRepository,
  personalDetailRepository,
  contactDetailRepository,
  documentRepository,
  ITeamData,
  IPersonalDetailData,
  IContactDetailData,
  IDocumentData,
  ITeamConditions,
  IPersonalDetailConditions,
  IContactDetailConditions,
  IDocumentConditions,
  ITeamProjection,
  IPersonalDetailProjection,
  IContactDetailProjection,
  IDocumentProjection,
  ITeamOptions,
  IPersonalDetailOptions,
  IDocumentOptions,
  IContactDetailOptions
} from '../../repositories';
import { arrayMerger } from '../../libs';

class TeamMiddleware {
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
        aadhar,
        pan
      }
    } = req;

    const teamResult = await teamRepository.create({});

    console.log(teamResult);

    const { originalId } = teamResult;

    const personalDetailData: IPersonalDetailData = {
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
      physicalStatus
    };

    const contactDetailData: IContactDetailData = {
      email,
      phone,
      address,
      state,
      pincode
    };

    const personalDetailResult = await personalDetailRepository.create(
      personalDetailData,
      originalId
    );

    // const contactDetailResult = await contactDetailRepository.create(
    //   contactDetailData,
    //   id
    // );

    // let flag: boolean = false;
    // let documentData: IDocumentData = {};
    // let documentResult = [];

    // if (aadhar) {
    //   documentData.aadhar = aadhar;
    //   flag = true;
    // }

    // if (pan) {
    //   documentData.pan = pan;
    //   flag = true;
    // }

    // if (flag) {
    //   documentResult = await documentRepository.create(documentData, id);
    // }

    // return {
    //   personalDetailResult,
    //   contactDetailResult,
    //   documentResult
    // };
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

    const personalDetailConditions: IPersonalDetailConditions = {};
    const contactDetailConditions: IContactDetailConditions = {};
    const documentConditions: IDocumentConditions = {};

    if (id) {
      personalDetailConditions.originalId = id;
      contactDetailConditions.originalId = id;
      documentConditions.originalId = id;
    }

    if (name) {
      personalDetailConditions.name = name;
    }

    if (fatherHusbandName) {
      personalDetailConditions.fatherHusbandName = fatherHusbandName;
    }

    if (sex) {
      personalDetailConditions.sex = sex;
    }

    if (maritalStatus) {
      personalDetailConditions.maritalStatus = maritalStatus;
    }

    if (religion) {
      personalDetailConditions.religion = religion;
    }

    if (category) {
      personalDetailConditions.category = category;
    }

    if (dateOfBirth) {
      personalDetailConditions.dateOfBirth = dateOfBirth;
    }

    if (placeOfBirth) {
      personalDetailConditions.placeOfBirth = placeOfBirth;
    }

    if (occupation) {
      personalDetailConditions.occupation = occupation;
    }

    if (policeStation) {
      personalDetailConditions.policeStation = policeStation;
    }

    if (physicalStatus) {
      personalDetailConditions.physicalStatus = physicalStatus;
    }

    if (state) {
      contactDetailConditions.state = state;
    }

    if (pincode) {
      contactDetailConditions.pincode = pincode;
    }

    if (email) {
      contactDetailConditions.email = email;
    }

    if (phone) {
      contactDetailConditions.phone = phone;
    }

    const personalDetailProjections: IPersonalDetailProjection = {};
    const contactDetailProjections: IContactDetailProjection = {};
    const documentProjection: IDocumentProjection = {};

    const personalDetailOptions: IPersonalDetailOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip)
    };

    const contactDetailOptions: IContactDetailOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip)
    };

    const documentOptions: IDocumentOptions = {
      limit: parseInt(limit),
      skip: parseInt(skip)
    };

    const personalDetailResult = await personalDetailRepository.find(
      personalDetailConditions,
      personalDetailProjections,
      personalDetailOptions
    );

    const contactDetailResult = await contactDetailRepository.find(
      contactDetailConditions,
      contactDetailProjections,
      contactDetailOptions
    );

    const documentResult = await documentRepository.find(
      documentConditions,
      documentProjection,
      documentOptions
    );

    return arrayMerger(
      personalDetailResult,
      contactDetailResult,
      documentResult
    );
  }

  public async update(req: Request) {}

  public async delete(req: Request) {}
}

export default new TeamMiddleware();
