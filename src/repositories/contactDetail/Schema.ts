import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class ContactDetailSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      email: String,
      phone: String,
      address: String,
      state: String,
      pincode: Number
    };

    super(baseSchema, options);
  }
}

export default ContactDetailSchema;
