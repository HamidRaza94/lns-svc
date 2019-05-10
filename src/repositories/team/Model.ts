import { SchemaOptions, Schema, Model, model } from 'mongoose';

import TeamSchema from './Schema';
import ITeamModel from './IModel';

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

const schema: Schema = new TeamSchema(options);

const TeamModel: Model<ITeamModel> = model<ITeamModel>(
  'Team',
  schema,
  'teams',
  true
);

export default TeamModel;
