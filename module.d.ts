declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    MONGO_URI: string;
    API_KEY: string;
    JWT_SECRET_KEY: string;
    CLOUDINARY_CLOUD_NAME: string,
    CLOUDINARY_API_KEY: string,
    CLOUDINARY_API_SECRET: string,
    MULTER: any,
  }
}
