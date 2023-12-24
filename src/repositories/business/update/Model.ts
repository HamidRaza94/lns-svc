import { Schema, Model as MongoModel, model } from 'mongoose';

import UpdateSchema from './Schema';
import IUpdateModel from './IModel';

const schema: Schema = new UpdateSchema();

const Model: MongoModel<IUpdateModel> = model<IUpdateModel>(
  'Update',
  schema,
  'updates',
);

export default Model;
