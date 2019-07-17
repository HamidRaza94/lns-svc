import { IVersionableModel } from '../versionable';

interface ILearnerRegistrationModel extends IVersionableModel {
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

export default ILearnerRegistrationModel;
