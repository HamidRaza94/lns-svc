import { IVersionableQuery } from '../../versionable';

interface ICourseData extends IVersionableQuery {
  code: string;
  name: string;
}

interface ICourseConditions extends IVersionableQuery {
  code?: string;
  name?: string;
}

export { ICourseData, ICourseConditions }
