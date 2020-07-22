import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import * as fs from 'fs';
import * as path from 'path';
import XmlStream from 'xml-stream';
import { XmlChunk } from 'interfaces';
import { xmlFieldParser } from 'utils';
import { MessageService } from 'services';

export class MessageController {
  public static route = '/messages';
  public router: Router = Router();

  constructor() {
    this.router.get('/upload', this.uploadMessagesFromFile);
  }

  public uploadMessagesFromFile(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    const readStream = fs.createReadStream(
      path.join(__dirname, './../../CodeTest-XML.xml'),
    );

    const xml = new XmlStream(readStream);
    xml.collect('Message');
    xml.on('endElement: Message', async (item: XmlChunk) => {
      try {
        const message = xmlFieldParser(item);
        const messageServiceInstance = Container.get(MessageService);
        await messageServiceInstance.saveFromFile(message);
      } catch (err) {
        next(err);
      }
    });

    xml.on('end', (_): void => {
      console.info('Messages was saved');
    });

    xml.on('error', err => {
      throw new Error(err);
    });
  }
}
