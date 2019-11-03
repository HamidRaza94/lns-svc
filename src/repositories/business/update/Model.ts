import { SchemaOptions, Schema, Model, model } from 'mongoose';

import UpdateSchema from './Schema';
import IUpdateModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new UpdateSchema(options);

const UpdateModel: Model<IUpdateModel> = model<IUpdateModel>(
  'Update',
  schema,
  'updates',
  true
);

export default UpdateModel;
