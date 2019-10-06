interface IConfig {
  PORT: string;
  NODE_ENV: string;
  MONGO_URI: string;
  API_KEY: string;
  PRIVATE_KEY: string;
  CLOUDINARY_CLOUD_NAME: string,
  CLOUDINARY_API_KEY: string,
  CLOUDINARY_API_SECRET: string,
  MULTER: any,
}

export default IConfig;
