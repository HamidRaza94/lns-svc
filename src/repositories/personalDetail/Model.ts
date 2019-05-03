import { SchemaOptions, Schema, Model, model } from 'mongoose';

import PersonalDetailSchema from './Schema';
import IPersonalDetailModel from './IModel';

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

const schema: Schema = new PersonalDetailSchema(options);

const PersonalDetailModel: Model<IPersonalDetailModel> = model<
  IPersonalDetailModel
>('PersonalDetail', schema, 'personalDetails', true);

export default PersonalDetailModel;
