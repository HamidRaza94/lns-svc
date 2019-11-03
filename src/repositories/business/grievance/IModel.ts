import { IVersionableModel } from '../../versionable';

interface IGrievanceModel extends IVersionableModel {
  enrollmentId: string,
  placeOfIncident: string,
  dateTimeIncident: string,
  summary: string,
  attachment: {
    data: any,
    contentType: string,
  },
}

export default IGrievanceModel;
