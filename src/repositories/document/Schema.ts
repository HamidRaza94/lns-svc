import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class DocumentSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      aadhar: String,
      pan: String
    };

    super(baseSchema, options);
  }
}

export default DocumentSchema;
