import { SchemaOptions, Schema, Model, model } from 'mongoose';

import DocumentSchema from './Schema';
import IDocumentModel from './IModel';

const options: SchemaOptions = {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__V;
    }
  },

  toObject: {
    transform: (doc, ret) => {
      delete ret.__V;
    }
  }
};

const schema: Schema = new DocumentSchema(options);

const DocumentModel: Model<IDocumentModel> = model<IDocumentModel>(
  'Document',
  schema,
  'documents',
  true
);

export default DocumentModel;
