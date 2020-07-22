import * as express from 'express';

import { MessageController } from './messages';

export class ApiRouting {
  public static ConfigureRouters(app: express.Router): void {
    app.use(MessageController.route, new MessageController().router);
    console.info('Routes connected ...');
  }
}
