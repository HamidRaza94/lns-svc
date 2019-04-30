import { SchemaOptions, Schema, Model, model } from 'mongoose';

import UpdateSchema from './Schema';
import IUpdateModel from './IModel';

const options: SchemaOptions = {
  toObject: {
    transform: (doc, ret) => {
      // ret.id = ret._id;
      // delete ret._id;
      delete ret.__v;
    }
  },

  toJSON: {
    transform: (doc, ret) => {
      // ret.id = ret._id;
      // delete ret._id;
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
