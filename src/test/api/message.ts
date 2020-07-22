import { MessageService } from 'services';
import { App } from 'settings';

import { expect } from 'chai';
import { request } from 'supertest';

describe('Save in db', () => {
  let server;

  before(done => {
    server = new App();
    server.loadServer();
    server.loadDatabase();
  });

  it('Saved massages from file', done => {
    request(server)
      .get('/messages/upload')
      .then(res => {
        // result
      })
      .catch(err => done(err));
  });
});

// We can also test services and controllers