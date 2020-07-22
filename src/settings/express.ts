import express, { Application, Request, Response, NextFunction } from 'express';
import { Statics, Http, ErrorHandler } from 'middlewares';
import { ApiRouting } from 'controllers';

interface Error {
  name: string;
  message: string;
  status: number;
  stack?: string;
}

export class Express {
  public express: Application;
  private statics: Statics;

  constructor() {
    this.express = express();
    this.mountRoutes();
    this.mountStatics();
    this.mountHttp();
  }

  private mountStatics(): void {
    this.express = Statics.mount(this.express);

    // !!!this is just simple router error handler
    this.express.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);
        res.json({
          error: {
            message: err.message,
          },
        });
      },
    );
  }

  private mountHttp(): void {
    this.express = Http.mount(this.express);
  }

  private mountRoutes(): void {
    ApiRouting.ConfigureRouters(this.express);
  }

  public init(): void {
    this.express.use(ErrorHandler.logErrors);
    this.express.use(ErrorHandler.clientErrorHandler);

    //  Start the server on the specified port
    this.express.listen(8000, (_error: Error) => {
      if (_error) {
        return console.log('Error: ', _error);
      }
      return console.log(
        '\x1b[33m%s\x1b[0m',
        `Server :: Running @ 'http://localhost:${8000}'`,
      );
    });
  }
}
