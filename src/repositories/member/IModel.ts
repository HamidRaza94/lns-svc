import { IVersionableModel } from '../versionable';

interface IMemberModel extends IVersionableModel {
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

export default IMemberModel;
