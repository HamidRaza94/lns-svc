import { SchemaOptions, Schema, Model, model } from 'mongoose';

import UpdateSchema from './Schema';
import IUpdateModel from './IModel';

const options: SchemaOptions = {
  toObject: {
    transform: (doc, ret) => {
      delete ret.__v;
    }
  },

  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
    }
  }
};

const schema: Schema = new UpdateSchema(options);

const UpdateModel: Model<IUpdateModel> = model<IUpdateModel>(
  'Update',
  schema,
  'updates',
  true
);

export default UpdateModel;
