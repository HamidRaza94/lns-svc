import { Schema, Model as MongoModel, model } from 'mongoose';

import CourseSchema from './Schema';
import ICourseModel from './IModel';

const schema: Schema = new CourseSchema();

const Model: MongoModel<ICourseModel> = model<ICourseModel>(
  'Course',
  schema,
  'courses',
);

export default Model;
