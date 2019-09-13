import { Schema, Model, model } from 'mongoose';

import TempEnrollmentSchema from './Schema';
import ITempEnrollmentModel from './IModel';

const schema: Schema = new TempEnrollmentSchema();

const TempEnrollmentModel: Model<ITempEnrollmentModel> = model<ITempEnrollmentModel>(
  'tempEnrollment',
  schema,
  'tempEnrollments',
  true,
);

export default TempEnrollmentModel;
