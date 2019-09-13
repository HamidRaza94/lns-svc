import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class TempEnrollmentSchema extends VersionableSchema {
  constructor() {
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
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default TempEnrollmentSchema;
