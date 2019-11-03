import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';

class CenterSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      code: String,
      name: String,
      address: {
        houseNo: String,
        streetNo: String,
        area: String,
        city: String,
        state: String,
        country: String,
      },
    };

    super(baseSchema, options);
  }
}

export default CenterSchema;
