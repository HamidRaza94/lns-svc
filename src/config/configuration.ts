import { config } from 'dotenv';

import IConfig from './IConfig';

config();

const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  PORT: envVars.PORT,
  NODE_ENV: envVars.NODE_ENV,
  MONGO_URI: envVars.MONGO_URI,
});

export default configuration;
