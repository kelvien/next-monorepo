import Pino from 'pino';

export class Logger {
  private logger;

  constructor() {
    this.logger = new Pino();
  }

  getLogger() {
    return this.logger;
  }
}
