import { SchemaOptions, Schema, Model, model } from 'mongoose';

import TeamSchema from './Schema';
import ITeamModel from './IModel';

const options: SchemaOptions = {
  versionKey: false,
};

const schema: Schema = new TeamSchema(options);

const TeamModel: Model<ITeamModel> = model<ITeamModel>(
  'Team',
  schema,
  'teams',
  true
);

export default TeamModel;
