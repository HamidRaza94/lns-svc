import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';
import { ROLES, USER_TYPES } from '../../../libs/constants';

class UserSchema extends VersionableSchema {
  constructor() {
    const contactSchema: SchemaDefinition = {
      type: {
        type: String,
      },
      value: {
        type: [String],
      }
    };

    const baseSchema: SchemaDefinition = {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ROLES,
        default: ROLES.USER,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: USER_TYPES,
        default: USER_TYPES.MEMBER,
        required: false,
      },
      designation: {
        type: String,
        required: false,
      },
      profile: {
        type: String,
        required: false,
      },
      profilePublicId: {
        type: String,
        required: false,
      },
      message: {
        type: String,
        required: false,
      },
      contacts: {
        type: [contactSchema],
      },
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default UserSchema;
