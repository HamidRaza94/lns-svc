import { config } from 'dotenv';
import * as multer from 'multer';

import IConfig from './IConfig';

config();

const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  PORT: Number(envVars.PORT || 8000),
  NODE_ENV: envVars.NODE_ENV,
  MONGO_URI: envVars.MONGO_URI,
  API_KEY: envVars.API_KEY,
  PRIVATE_KEY: envVars.PRIVATE_KEY,
  CLOUDINARY_CLOUD_NAME: envVars.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: envVars.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: envVars.CLOUDINARY_API_SECRET,
  MULTER: multer({ storage: multer.memoryStorage() }),
});

console.log('configuration', configuration);

export default configuration;
