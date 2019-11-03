import { SchemaOptions, Schema, Model, model } from 'mongoose';

import CourseSchema from './Schema';
import ICourseModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new CourseSchema(options);

const CourseModel: Model<ICourseModel> = model<ICourseModel>(
  'Course',
  schema,
  'courses',
  true
);

export default CourseModel;
