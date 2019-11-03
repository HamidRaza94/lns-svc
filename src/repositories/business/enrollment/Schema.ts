import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';

class EnrollmentSchema extends VersionableSchema {
  constructor() {
    const baseSchema: SchemaDefinition = {
      name: String,
      fatherName: String,
      sex: String,
      maritalStatus: String,
      dateOfBirth: String,
      placeOfBirth: String,
      category: String,
      religion: String,
      occupation: String,
      physicalStatus: String,
      email: String,
      phone: String,
      policeStation: String,
      state: String,
      pincode: String,
      address: String,
      aadhaar: String,
      pan: String,
      photo: String,
      sign: String,
      paymentId: String,
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default EnrollmentSchema;
