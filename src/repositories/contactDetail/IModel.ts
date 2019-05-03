import { IVersionableModel } from '../versionable';

interface IContactDetailModel extends IVersionableModel {
  email: string;
  phone: string;
  address: string;
  state: string;
  pincode: number;
}

export default IContactDetailModel;
