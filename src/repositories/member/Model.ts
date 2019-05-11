import { SchemaOptions, Schema, Model, model } from 'mongoose';

import MemberSchema from './Schema';
import IMemberModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new MemberSchema(options);

const MemberModel: Model<IMemberModel> = model<IMemberModel>(
  'Member',
  schema,
  'members',
  true
);

export default MemberModel;
