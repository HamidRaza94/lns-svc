import { IVersionableModel } from '../versionable';

interface IDocumentModel extends IVersionableModel {
  aadhar: string;
  pan: string;
}

export default IDocumentModel;
