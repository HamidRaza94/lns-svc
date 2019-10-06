import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class GrievanceSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      enrollmentId: String,
      placeOfIncident: String,
      dateTimeIncident: String,
      summary: String,
      attachment: {
        data: Buffer,
        contentType: String,
      },
    };

    super(baseSchema, options);
  }
}

export default GrievanceSchema;
