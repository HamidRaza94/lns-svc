import { IVersionableModel } from '../versionable';

interface IGrievanceModel extends IVersionableModel {
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
  placeOfIncident: string,
  dateTimeIncident: string,
  summary: string,
}

export default IGrievanceModel;
