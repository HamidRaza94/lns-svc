import { SchemaOptions, Schema, Model, model } from 'mongoose';

import VolunteerSchema from './Schema';
import IVolunteerModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new VolunteerSchema(options);

const VolunteerModel: Model<IVolunteerModel> = model<IVolunteerModel>(
  'volunteer',
  schema,
  'volunteers',
  true
);

export default VolunteerModel;
