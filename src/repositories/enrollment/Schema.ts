import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class EnrollmentSchema extends VersionableSchema {
  constructor() {
    const baseSchema: SchemaDefinition = {
      enrollmentId: String,
      name: String,
      fatherHusbandName: String,
      address: String,
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default EnrollmentSchema;
