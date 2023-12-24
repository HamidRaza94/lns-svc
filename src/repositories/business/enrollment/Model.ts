import { Schema, Model as MongoModel, model } from 'mongoose';

import EnrollmentSchema from './Schema';
import IEnrollmentModel from './IModel';

const schema: Schema = new EnrollmentSchema();

const Model: MongoModel<IEnrollmentModel> = model<IEnrollmentModel>(
  'enrollment',
  schema,
  'enrollments',
);

export default Model;
