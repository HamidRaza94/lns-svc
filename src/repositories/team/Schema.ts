import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class TeamSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {};

    super(baseSchema, options);
  }
}

export default TeamSchema;
