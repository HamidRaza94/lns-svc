import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface ITempEnrollmentData extends IVersionableQuery {
  name: string,
  fatherName: string,
  sex: string,
  maritalStatus: string,
  dateOfBirth: string,
  aadhaar: string,
  religion: string,
  category: string,
  address: string,
  email: string,
  phone: string,
  policeStation: string,
  state: string,
  pincode: string,
}

interface ITempEnrollmentConditions extends IVersionableQuery {
  enrollmentId?: string;
  name?: string,
  fatherName?: string,
  sex?: string,
  maritalStatus?: string,
  dateOfBirth?: string,
  aadhaar?: string,
  religion?: string,
  category?: string,
  address?: string,
  email?: string,
  phone?: number,
  policeStation?: string,
  state?: string,
  pincode?: number,
}

interface ITempEnrollmentProjection extends IVersionableProjection {
  originalId?: boolean;
  enrollmentId?: boolean;
  name?: boolean,
  fatherName?: boolean,
  sex?: boolean,
  maritalStatus?: boolean,
  dateOfBirth?: boolean,
  aadhaar?: boolean,
  religion?: boolean,
  category?: boolean,
  address?: boolean,
  email?: boolean,
  phone?: boolean,
  policeStation?: boolean,
  state?: boolean,
  pincode?: boolean,
}

export {
  ITempEnrollmentData,
  ITempEnrollmentConditions,
  ITempEnrollmentProjection,
};
