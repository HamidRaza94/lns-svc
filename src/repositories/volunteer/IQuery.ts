import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface IVolunteerData extends IVersionableQuery {
  
}

interface IVolunteerConditions extends IVersionableQuery {
  
}

interface IVolunteerProjection extends IVersionableProjection {
  
}

interface IVolunteerOptions {
  limit?: number;
  skip?: number;
}

export {
  IVolunteerData,
  IVolunteerConditions,
  IVolunteerProjection,
  IVolunteerOptions
};
