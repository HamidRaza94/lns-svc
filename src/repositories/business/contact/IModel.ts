import { IVersionableModel } from '../../versionable';

interface IContactModel extends IVersionableModel {
  name: string;
  email: string;
  phone: number;
  comment: string;
}

export default IContactModel;
