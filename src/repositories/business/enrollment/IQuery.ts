import { IVersionableQuery } from '../../versionable';

interface IEnrollmentData extends IVersionableQuery {
  name: string,
  fatherName: string,
  sex: string,
  maritalStatus: string,
  dateOfBirth: string,
  placeOfBirth: string,
  category: string,
  religion: string,
  occupation: string,
  physicalStatus: string,
  email: string,
  phone: string,
  policeStation: string,
  state: string,
  pincode: string,
  address: string,
  aadhaar: string,
  pan: string,
  photo: string,
  sign: string,
  paymentId: string,
}

interface IEnrollmentConditions extends IVersionableQuery {
  name?: string;
  fatherHusbandName?: string;
  address?: string;
  phone?: number;
}

export { IEnrollmentData, IEnrollmentConditions }
