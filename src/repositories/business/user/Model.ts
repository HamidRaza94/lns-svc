import { Schema, Model as MongoModel, model } from 'mongoose';

import UserSchema from './Schema';
import IUserModel from './IModel';

const schema: Schema = new UserSchema();

const Model: MongoModel<IUserModel> = model<IUserModel>(
  'user',
  schema,
  'users',
);

export default Model;
