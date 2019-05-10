import { IVersionableQuery } from '../versionable';

interface IPersonalDetailData extends IVersionableQuery {
  name: string;
  fatherHusbandName: string;
  sex: string;
  maritalStatus: string;
  religion: string;
  category: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  occupation: string;
  policeStation: string;
  physicalStatus: boolean;
}

interface IPersonalDetailConditions extends IVersionableQuery {
  originalId?: string;
  name?: string;
  fatherHusbandName?: string;
  sex?: string;
  maritalStatus?: string;
  religion?: string;
  category?: string;
  dateOfBirth?: Date;
  placeOfBirth?: string;
  occupation?: string;
  policeStation?: string;
  physicalStatus?: boolean;
}

interface IPersonalDetailProjection {
  originalId?: number;
  name?: string;
  fatherHusbandName?: string;
  sex?: string;
  maritalStatus?: string;
  religion?: string;
  category?: string;
  dateOfBirth?: Date;
  placeOfBirth?: string;
  occupation?: string;
  policeStation?: string;
  physicalStatus?: boolean;
}

interface IPersonalDetailOptions {
  limit?: number;
  skip?: number;
}

export {
  IPersonalDetailData,
  IPersonalDetailConditions,
  IPersonalDetailProjection,
  IPersonalDetailOptions
};
