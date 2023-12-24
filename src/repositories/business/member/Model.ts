import { Schema, Model as MongoModel, model } from 'mongoose';

import MemberSchema from './Schema';
import IMemberModel from './IModel';

const schema: Schema = new MemberSchema();

const Model: MongoModel<IMemberModel> = model<IMemberModel>(
  'Member',
  schema,
  'members',
);

export default Model;
