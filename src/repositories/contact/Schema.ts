import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class ContactSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      name: String,
      email: String,
      phone: Number,
      comment: String
    };

    super(baseSchema, options);
  }
}

export default ContactSchema;
