import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';

class MemberSchema extends VersionableSchema {
  constructor(options: SchemaOptions) {
    const baseSchema: SchemaDefinition = {
      name: String,
      fatherHusbandName: String,
      sex: String,
      maritalStatus: String,
      religion: String,
      category: String,
      dateOfBirth: String,
      placeOfBirth: String,
      occupation: String,
      policeStation: String,
      physicalStatus: Boolean,
      email: String,
      phone: Number,
      address: String,
      state: String,
      pincode: Number,
      aadhaar: String,
      pan: String,
      amount: Number,
    };

    super(baseSchema, options);
  }
}

export default MemberSchema;
