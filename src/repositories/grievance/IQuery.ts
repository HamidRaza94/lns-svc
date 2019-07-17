import { IVersionableQuery, IVersionableProjection } from '../versionable';

interface IGrievanceData extends IVersionableQuery {
  name: string,
  fatherName: string,
  sex: string,
  maritalStatus: string,
  dateOfBirth: string,
  aadhaar: string,
  religion: string,
  category: string,
  address: string,
  email: string,
  phone: string,
  policeStation: string,
  state: string,
  pincode: string,
  placeOfIncident: string,
  dateTimeIncident: string,
  summary: string,
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
