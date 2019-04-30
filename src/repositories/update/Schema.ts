import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class UpdateSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const updateSchema: SchemaDefinition = {
      type: String,
      headline: String,
      description: String
    };

    super(updateSchema, options);
  }
}

export default UpdateSchema;
