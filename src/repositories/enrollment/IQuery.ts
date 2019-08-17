import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface IEnrollmentData extends IVersionableQuery {
  name: string;
  fatherHusbandName: string;
  address: string;
  phone: number;
}

interface IEnrollmentConditions extends IVersionableQuery {
  enrollmentId?: string;
  name?: string;
  fatherHusbandName?: string;
  address?: string;
  phone?: number;
}

interface IEnrollmentProjection extends IVersionableProjection {
  originalId?: boolean;
  enrollmentId?: boolean;
  name?: boolean;
  fatherHusbandName?: boolean;
  address?: boolean;
  phone?: number;
}

export {
  IEnrollmentData,
  IEnrollmentConditions,
  IEnrollmentProjection,
};
