import { IVersionableModel } from '../versionable';

interface IEnrollmentModel extends IVersionableModel {
  name: string;
  fatherHusbandName: string;
  address: string;
}

export default IEnrollmentModel;
