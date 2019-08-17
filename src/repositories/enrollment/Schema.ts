import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class EnrollmentSchema extends VersionableSchema {
  constructor() {
    const baseSchema: SchemaDefinition = {
      name: String,
      fatherHusbandName: String,
      address: String,
      phone: Number,
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default EnrollmentSchema;
