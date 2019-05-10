import { IVersionableQuery } from '../versionable';

interface IDocumentData extends IVersionableQuery {
  aadhar?: string;
  pan?: string;
}

interface IDocumentConditions extends IVersionableQuery {
  originalId?: string;
  aadhar?: string;
  pan?: string;
}

interface IDocumentProjection {
  originalId?: number;
  aadhar?: string;
  pan?: string;
}

interface IDocumentOptions {
  limit?: number;
  skip?: number;
}

export {
  IDocumentData,
  IDocumentConditions,
  IDocumentProjection,
  IDocumentOptions
};
