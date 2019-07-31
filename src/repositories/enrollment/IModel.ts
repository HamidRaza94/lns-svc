import { IVersionableModel } from '../versionable';

interface IEnrollmentModel extends IVersionableModel {
  enrollmentId: string;
  name: string;
  fatherHusbandName: string;
  address: string;
}

export default IEnrollmentModel;
