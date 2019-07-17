import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../versionable';

class LearnerRegistrationSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      candidateName: String,
      fatherName: String,
      sex: String,
      maritalStatus: String,
      dateOfBirth: String,
      placeOfBirth: String,
      category: String,
      religion: String,
      aadhaar: Number,
      email: String,
      phone: Number,
      state: String,
      pincode: Number,
      address: String,
      academicCenter: String,
      courseName: String,
      academicShift: String,
    };

    super(baseSchema, options);
  }
}

export default LearnerRegistrationSchema;
