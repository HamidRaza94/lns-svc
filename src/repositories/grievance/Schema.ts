import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class GrievanceSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      name: String,
      fatherName: String,
      sex: String,
      maritalStatus: String,
      dateOfBirth: String,
      aadhaar: String,
      religion: String,
      category: String,
      address: String,
      email: String,
      phone: String,
      policeStation: String,
      state: String,
      pincode: String,
      placeOfIncident: String,
      dateTimeIncident: String,
      summary: String,
    };

    super(baseSchema, options);
  }
}

export default GrievanceSchema;
