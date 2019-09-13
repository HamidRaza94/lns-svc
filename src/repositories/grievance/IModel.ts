import { IVersionableModel } from '../versionable';

interface IGrievanceModel extends IVersionableModel {
  enrollmentId: string,
  placeOfIncident: string,
  dateTimeIncident: string,
  summary: string,
  attachment: string,
}

export default IGrievanceModel;
