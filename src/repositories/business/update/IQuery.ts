import { IVersionableQuery } from '../../versionable';

interface IUpdateData extends IVersionableQuery {
  type: string;
  headline: string;
  description: string;
}

interface IUpdateConditions extends IVersionableQuery {
  _id?: string;
  originalId?: string;
  type?: string;
}

export { IUpdateData, IUpdateConditions };
