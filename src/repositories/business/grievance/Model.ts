import { Schema, Model as MongoModel, model } from 'mongoose';

import GrievanceSchema from './Schema';
import IGrievanceModel from './IModel';

const schema: Schema = new GrievanceSchema();

const Model: MongoModel<IGrievanceModel> = model<IGrievanceModel>(
  'Grievance',
  schema,
  'grievances',
);

export default Model;
