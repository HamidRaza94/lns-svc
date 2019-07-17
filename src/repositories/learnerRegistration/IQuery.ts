import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface ILearnerRegistrationData extends IVersionableQuery {
  candidateName: string;
  fatherName: string;
  sex: string;
  maritalStatus: string;
  dateOfBirth: string;
  placeOfBirth: string;
  category: string;
  religion: string;
  aadhaar: number;
  email: string;
  phone: number;
  state: string;
  pincode: number;
  address: string;
  academicCenter: string;
  courseName: string;
  academicShift: string;
}

interface ILearnerRegistrationConditions extends IVersionableQuery {
  candidateName?: string;
  fatherName?: string;
  sex?: string;
  maritalStatus?: string;
  placeOfBirth?: string;
  category?: string;
  religion?: string;
  state?: string;
  pincode?: number;
  academicCenter?: string;
  courseName?: string;
  academicShift?: string;
}

interface ILearnerRegistrationProjection extends IVersionableProjection {
  candidateName?: string;
  fatherName?: string;
  sex?: string;
  maritalStatus?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  category?: string;
  religion?: string;
  aadhaar?: number;
  email?: string;
  phone?: number;
  state?: string;
  pincode?: number;
  address?: string;
  academicCenter?: string;
  courseName?: string;
  academicShift?: string;
}

interface ILearnerRegistrationOptions {
  limit?: number;
  skip?: number;
}

export {
  ILearnerRegistrationData,
  ILearnerRegistrationConditions,
  ILearnerRegistrationProjection,
  ILearnerRegistrationOptions
};
