import { IVersionableQuery } from '../versionable';

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

interface IContactProjection {
  originalId?: number;
  name?: number;
  email?: number;
  phone?: number;
  comment?: number;
}

interface IContactOptions {
  limit?: number;
  skip?: number;
}

export {
  IContactData,
  IContactConditions,
  IContactProjection,
  IContactOptions
};
