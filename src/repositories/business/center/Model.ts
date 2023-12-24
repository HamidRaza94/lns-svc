import { Schema, Model as MongoModel, model } from 'mongoose';

import CenterSchema from './Schema';
import ICenterModel from './IModel';

const schema: Schema = new CenterSchema();

const Model: MongoModel<ICenterModel> = model<ICenterModel>(
  'Center',
  schema,
  'centers',
);

export default Model;
