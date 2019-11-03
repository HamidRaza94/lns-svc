import { IVersionableModel } from '../../versionable';

interface ICourseModel extends IVersionableModel {
  code: string;
  name: string;
}

export default ICourseModel;
