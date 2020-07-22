import { Express } from 'settings';

export class App {
  express: Express;
  constructor() {
    this.express = new Express();
    this.clearConsole();
  }

  private clearConsole(): void {
    process.stdout.write('\x1B[2J\x1B[0f');
  }

  public loadServer(): void {
    console.info('Server started...');
    this.express.init();
  }

  public loadDatabase(): void {
    console.info('Database started...');

    // Database.init();
  }
}
