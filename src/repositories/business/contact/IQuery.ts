import { IVersionableQuery } from '../../versionable';

interface IContactData extends IVersionableQuery {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

interface IContactConditions extends IVersionableQuery {
  name?: string;
  email?: string;
  phone?: string;
}

export { IContactData, IContactConditions }
