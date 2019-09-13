import { IVersionableModel } from '../versionable';

interface ITempEnrollmentModel extends IVersionableModel {
  name: String,
  fatherName: String,
  sex: String,
  maritalStatus: String,
  dateOfBirth: String,
  aadhaar: String,
  religion: String,
  category: String,
  address: String,
  email: String,
  phone: String,
  policeStation: String,
  state: String,
  pincode: String,
}

export default ITempEnrollmentModel;
