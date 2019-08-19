import { IVersionableModel } from '../versionable';

interface IEnrollmentModel extends IVersionableModel {
  name: string;
  fatherHusbandName: string;
  address: string;
  phone: number;
}

export default IEnrollmentModel;
