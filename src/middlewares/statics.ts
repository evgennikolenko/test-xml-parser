import * as path from 'path';
import express, { Application } from 'express';

export class Statics {
  public static mount(app: Application): Application {
    const options = { maxAge: 31557600000 };
    app.use(express.static(path.resolve(`${__dirname}/../static/`)));
    app.use(
      '/vendor',
      express.static(path.join(__dirname, '../../node_modules'), options),
    );
    return app;
  }
}
