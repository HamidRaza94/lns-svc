import IVersionableQuery from '../versionable/IQuery';

interface IUpdateData extends IVersionableQuery {
  type?: string;
  headline?: string;
  description?: string;
}

interface IUpdateConditions extends IVersionableQuery {
  _id?: string;
  originalId?: string;
  type?: string;
}

interface IUpdateProjection {
  _id?: number;
  originalId?: number;
  type?: number;
  headline?: number;
  description?: number;
  createdAt?: number;
}

interface IUpdateOptions {
  limit?: number;
  skip?: number;
}

export { IUpdateData, IUpdateConditions, IUpdateProjection, IUpdateOptions };
