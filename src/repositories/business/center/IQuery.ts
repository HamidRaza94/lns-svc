import { IVersionableQuery } from '../../versionable';

interface ICenterData extends IVersionableQuery {
  code: string;
  name: string;
  address: any;
}

interface ICenterConditions extends IVersionableQuery {
  code?: string;
  name?: string;
  address?: any;
}

export { ICenterData, ICenterConditions }
