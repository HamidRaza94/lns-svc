import { Schema, Model as MongoModel, model } from 'mongoose';

import ImageSchema from './Schema';
import IImageModel from './IModel';

const schema: Schema = new ImageSchema();

const Model: MongoModel<IImageModel> = model<IImageModel>(
  'image',
  schema,
  'images',
);

export default Model;
