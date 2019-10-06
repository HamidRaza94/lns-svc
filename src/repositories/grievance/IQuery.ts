import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface IGrievanceData extends IVersionableQuery {
  enrollmentId: string,
  placeOfIncident: string,
  dateTimeIncident: string,
  summary: string,
  attachment: {
    data: any,
    contentType: string,
  },
}

interface IGrievanceConditions extends IVersionableQuery {
  
}

interface IGrievanceProjection extends IVersionableProjection {
  
}

interface IGrievanceOptions {
  
}

export {
  IGrievanceData,
  IGrievanceConditions,
  IGrievanceProjection,
  IGrievanceOptions
};
