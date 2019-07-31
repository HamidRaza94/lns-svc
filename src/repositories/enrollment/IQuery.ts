import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface IEnrollmentData extends IVersionableQuery {
  enrollmentId: string;
  name: string;
  fatherHusbandName: string;
  address: string;
}

interface IEnrollmentConditions extends IVersionableQuery {
  enrollmentId?: string;
  name?: string;
  fatherHusbandName?: string;
  address?: string;
}

interface IEnrollmentProjection extends IVersionableProjection {
  originalId?: boolean;
  enrollmentId?: boolean;
  name?: boolean;
  fatherHusbandName?: boolean;
  address?: boolean;
}

export {
  IEnrollmentData,
  IEnrollmentConditions,
  IEnrollmentProjection,
};
