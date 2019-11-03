import { IVersionableQuery } from '../../versionable';

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

export { IGrievanceData, IGrievanceConditions }
