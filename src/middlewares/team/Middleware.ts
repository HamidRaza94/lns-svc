import {
  personalDetailRepository,
  contactDetailRepository,
  documentRepository,
  IPersonalDetailData,
  IContactDetailData,
  IDocumentData,
  IPersonalDetailConditions,
  IContactDetailConditions,
  IDocumentConditions,
  IPersonalDetailProjection,
  IContactDetailProjection,
  IDocumentProjection,
  IPersonalDetailOptions,
  IContactOptions,
  IDocumentOptions
} from '../../repositories';
import ITeamData from './IData';
import { VersionableRepository } from '../../repositories/versionable';

class TeamMiddleware {
  public async create(data: ITeamData) {
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
      aadhar,
      pan
    } = data;

    const id = await VersionableRepository.generateObjectId();

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

    const resultPersonalDetail = await personalDetailRepository.create(
      personalDetailData,
      id
    );

    const contactDetailData: IContactDetailData = {
      email,
      phone,
      address,
      state,
      pincode
    };

    const resultContactDetail = await contactDetailRepository.create(
      contactDetailData,
      id
    );

    let flag: boolean = true;
    let resultDocument;

    if (aadhar && pan) {
      flag = false;

      const documentData: IDocumentData = {
        aadhar,
        pan
      };

      resultDocument = await documentRepository.create(documentData, id);
    }

    const result = {
      resultPersonalDetail,
      resultContactDetail,
      resultDocument
    };

    return result;
  }
}

export default new TeamMiddleware();
