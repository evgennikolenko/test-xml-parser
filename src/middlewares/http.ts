import cors from 'cors';
import { Application } from 'express';
import * as bodyParser from 'body-parser';

export class Http {
  public static mount(app: Application): Application {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    return app;
  }
}
