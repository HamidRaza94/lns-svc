import { IVersionableModel } from '../versionable';

interface IEnrollmentModel extends IVersionableModel {
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

export default IEnrollmentModel;
