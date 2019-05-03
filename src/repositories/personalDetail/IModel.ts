import { IVersionableModel } from '../versionable';

interface IPersonalDetailModel extends IVersionableModel {
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

export default IPersonalDetailModel;
