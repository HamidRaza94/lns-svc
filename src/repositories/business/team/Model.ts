import { Schema, Model as MongoModel, model } from 'mongoose';

import TeamSchema from './Schema';
import ITeamModel from './IModel';

const schema: Schema = new TeamSchema();

const Model: MongoModel<ITeamModel> = model<ITeamModel>(
  'Team',
  schema,
  'teams',
);

export default Model;
