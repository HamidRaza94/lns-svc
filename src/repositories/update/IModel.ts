import { IVersionableModel } from '../versionable';

interface IUpdateModel extends IVersionableModel {
  type: string;
  headline: string;
  description: string;
}

export default IUpdateModel;
