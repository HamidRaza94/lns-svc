import { SchemaDefinition, SchemaOptions } from 'mongoose';

import { VersionableSchema } from '../../versionable';
import { IMAGE_TYPES } from '../../../libs/constants';

class ImageSchema extends VersionableSchema {
  constructor() {
    const baseSchema: SchemaDefinition = {
      type: {
        type: String,
        enum: IMAGE_TYPES,
        default: IMAGE_TYPES.gallery,
        required: true,
      },
      imageURL: {
        type: String,
        required: true,
      },
      imagePublicId: {
        type: String,
        required: true,
      },
    };

    const baseOptions: SchemaOptions = {};

    super(baseSchema, baseOptions);
  }
}

export default ImageSchema;
