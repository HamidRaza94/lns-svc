import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { config as cloudinaryConfig } from 'cloudinary';

import { IConfig } from '../config';
import { notFoundRoute, errorHandler } from './routes';
import Database from './Database';
import { router } from '../router';

class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap(): this {
    this.initCors();
    this.initCloudinaryStorage();
    this.initBodyParser();
    this.setupRoutes();

    return this;
  }

  private setupRoutes() {
    const { API_KEY } = this.config;

    this.app.use((req: express.Request, _, next: express.NextFunction) => { console.log('incoming req ->', req.path); next() });
    this.app.use('/health-check', (_, res: express.Response) => { res.status(200).send('I am Good') });
    this.app.use(`/${API_KEY}`, router);
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public async run() {
    const { PORT, MONGO_URI } = this.config;

    const isConnected = await Database.open(MONGO_URI);

    if (isConnected) {
      this.app.listen(PORT, () => {
        console.log('|--------------------------------|');
        console.log(`| Server is running on port ${PORT} |`);
        console.log('|--------------------------------|');
      });
    } else {
      console.log('DB Connection Failure');
    }
  }

  private initCors() {
    this.app.use(cors());
  }

  private initBodyParser() {
    this.app.use(bodyParser.json());
  }

  private initCloudinaryStorage() {
    const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = this.config;

    this.app.use((_, __, next: express.NextFunction) => {
      cloudinaryConfig({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,
      });

      next();
    })
  }
}

export default Server;
