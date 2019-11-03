import { SchemaOptions, Schema, Model, model } from 'mongoose';

import CenterSchema from './Schema';
import ICenterModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new CenterSchema(options);

const CenterModel: Model<ICenterModel> = model<ICenterModel>(
  'Center',
  schema,
  'centers',
  true
);

export default CenterModel;
