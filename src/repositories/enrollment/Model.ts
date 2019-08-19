import { Schema, Model, model } from 'mongoose';

import EnrollmentSchema from './Schema';
import IEnrollmentModel from './IModel';

const schema: Schema = new EnrollmentSchema();

const EnrollmentModel: Model<IEnrollmentModel> = model<IEnrollmentModel>(
  'enrollment',
  schema,
  'enrollments',
  true,
);

export default EnrollmentModel;
