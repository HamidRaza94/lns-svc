import { SchemaOptions, Schema, Model, model } from 'mongoose';

import ContactDetailSchema from './Schema';
import IContactDetailModel from './IModel';

const options: SchemaOptions = {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__V;
    }
  },

  toObject: {
    transform: (doc, ret) => {
      delete ret.__V;
    }
  }
};

const schema: Schema = new ContactDetailSchema(options);

const ContactDetailModel: Model<IContactDetailModel> = model<
  IContactDetailModel
>('ContactDetail', schema, 'contactDetails', true);

export default ContactDetailModel;
