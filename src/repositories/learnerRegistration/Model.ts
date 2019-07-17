import { SchemaOptions, Schema, Model, model } from 'mongoose';

import LearnerRegistrationSchema from './Schema';
import ILearnerRegistrationModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new LearnerRegistrationSchema(options);

const LearnerRegistrationModel: Model<ILearnerRegistrationModel> = model<ILearnerRegistrationModel>(
  'LearnerRegistration',
  schema,
  'learnerRegistrations',
  true
);

export default LearnerRegistrationModel;
