import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class PersonalDetailSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      name: String,
      fatherHusbandName: String,
      sex: String,
      maritalStatus: String,
      religion: String,
      category: String,
      dateOfBirth: Date,
      placeOfBirth: String,
      occupation: String,
      policeStation: String,
      physicalStatus: Boolean
    };

    super(baseSchema, options);
  }
}

export default PersonalDetailSchema;
