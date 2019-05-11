import { SchemaOptions, Schema, Model, model } from 'mongoose';

import ContactSchema from './Schema';
import IContactModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new ContactSchema(options);

const ContactModel: Model<IContactModel> = model<IContactModel>(
  'Contact',
  schema,
  'contacts',
  true
);

export default ContactModel;
