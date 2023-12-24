import { IVersionableQuery } from '../../versionable';

interface IMemberData extends IVersionableQuery {
  name: string,
  fatherHusbandName: string,
  sex: string,
  maritalStatus: string,
  religion: string,
  category: string,
  dateOfBirth: string,
  placeOfBirth: string,
  occupation: string,
  policeStation: string,
  physicalStatus: boolean,
  email: string,
  phone: number,
  address: string,
  state: string,
  pincode: number,
  aadhaar?: string,
  pan?: string,
  amount: number,
}

interface IMemberConditions extends IVersionableQuery {
  name?: string,
  fatherHusbandName?: string,
  sex?: string,
  maritalStatus?: string,
  religion?: string,
  category?: string,
  dateOfBirth?: string,
  placeOfBirth?: string,
  occupation?: string,
  policeStation?: string,
  physicalStatus?: boolean,
  email?: string,
  phone?: number,
  state?: string,
  pincode?: number,
}

export { IMemberData, IMemberConditions };
