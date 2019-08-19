import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { IConfig } from '../config';
import { notFoundRoute, errorHandler, Database } from '.';
import { router } from '../router';

class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap(): Server {
    this.initCors();
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public async run() {
    const {
      app,
      config: { PORT, MONGO_URI },
    } = this;

    const isConnected = await Database.open(MONGO_URI);

    if (isConnected) {
      app.listen(PORT, () => {
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

  private setupRoutes() {
    const {
      app,
      config: { API_KEY },
    } = this;

    app.use('/health-check', (_, res: express.Response) => { res.status(200).send('I am Good') });
    app.use(`/${API_KEY}`, router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }
}

export default Server;
