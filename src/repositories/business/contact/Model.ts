import { Schema, Model as MongoModel, model } from 'mongoose';

import ContactSchema from './Schema';
import IContactModel from './IModel';

const schema: Schema = new ContactSchema();

const Model: MongoModel<IContactModel> = model<IContactModel>(
  'Contact',
  schema,
  'contacts',
);

export default Model;
