import { createLogger } from 'redux-logger';

const logger = createLogger();

export const getLoggerExtension = () => {
  return {
    middleware: [logger]
  }
}