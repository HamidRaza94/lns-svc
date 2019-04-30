import { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';

class VersionableSchema extends Schema {
  constructor(baseSchema: SchemaDefinition, options: SchemaOptions) {
    const versionableSchema: SchemaDefinition = {
      _id: {
        type: String,
        required: true
      },

      originalId: {
        type: String,
        required: true
      },

      createdAt: {
        type: Date,
        default: new Date()
      },

      updatedAt: {
        type: Date,
        required: false
      },

      deletedAt: {
        type: Date,
        required: false
      }
    };

    const schema: Schema = Object.assign(baseSchema, versionableSchema);
    super(schema, options);
  }
}

export default VersionableSchema;
