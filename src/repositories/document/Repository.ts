import { Model } from 'mongoose';

import { VersionableRepository } from '../versionable';
import IDocumentModel from './IModel';
import DocumentModel from './Model';
import {
  IDocumentData,
  IDocumentConditions,
  IDocumentProjection,
  IDocumentOptions
} from './IQuery';

class DocumentRepository extends VersionableRepository<
  IDocumentModel,
  Model<IDocumentModel>,
  IDocumentData,
  IDocumentConditions,
  IDocumentProjection,
  IDocumentOptions
> {
  constructor() {
    super(DocumentModel);
  }

  public async create(data: IDocumentData, id: string) {
    return super.create(data, id);
  }

  public find(
    conditions?: IDocumentConditions,
    projection?: IDocumentProjection,
    options?: IDocumentOptions
  ) {
    return super.find(conditions, projection, options);
  }

  public async update(
    conditions: IDocumentConditions,
    dataToUpdate: IDocumentData,
    options?: IDocumentOptions
  ) {
    return super.update(conditions, dataToUpdate, options);
  }

  public async delete(conditions: IDocumentConditions) {
    return await super.delete(conditions);
  }
}

export default new DocumentRepository();
