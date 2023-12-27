import { IVersionableQuery } from '../../versionable';
import { ROLES, USER_TYPES } from '../../../libs/constants';
import { IContact } from './IModel';

interface IUserData extends IVersionableQuery {
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

interface IUserConditions extends IVersionableQuery {
  username?: string,
  type?: USER_TYPES,
}

export { IUserData, IUserConditions }
