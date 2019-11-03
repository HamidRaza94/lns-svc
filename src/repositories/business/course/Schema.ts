import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';

class CourseSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      code: String,
      name: String,
    };

    super(baseSchema, options);
  }
}

export default CourseSchema;
