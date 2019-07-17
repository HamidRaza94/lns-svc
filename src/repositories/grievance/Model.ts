import { SchemaOptions, Schema, Model, model } from 'mongoose';

import GrievanceSchema from './Schema';
import IGrievanceModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new GrievanceSchema(options);

const GrievanceModel: Model<IGrievanceModel> = model<IGrievanceModel>(
  'Grievance',
  schema,
  'grievances',
  true
);

export default GrievanceModel;
