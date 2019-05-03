import { IVersionableQuery } from '../versionable';

interface IContactDetailData extends IVersionableQuery {
  email: string;
  phone: number;
  address: string;
  state: string;
  pincode: number;
}

interface IContactDetailConditions extends IVersionableQuery {
  email?: string;
  phone?: string;
  address?: string;
  state?: string;
  pincode?: number;
}

interface IContactDetailProjection {
  originalId?: number;
  email?: string;
  phone?: string;
  address?: string;
  state?: string;
  pincode?: number;
}

interface IContactDetailOptions {
  limit?: number;
  skip?: number;
}

export {
  IContactDetailData,
  IContactDetailConditions,
  IContactDetailProjection,
  IContactDetailOptions
};
