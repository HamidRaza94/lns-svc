import { IVersionableModel } from '../../versionable';
import { ROLES, USER_TYPES } from '../../../libs/constants';

export interface IContact {
  type: string,
  value: string[],
}

interface IUserModel extends IVersionableModel {
  firstName: string,
  lastName: string,
  role: ROLES,
  username: string,
  password: string,
  type: USER_TYPES,
  designation?: string,
  profile?: string,
  message?: string,
  contacts?: IContact[],
}

export default IUserModel;
