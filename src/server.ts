/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './utils/logger';

import app from './app';

dotenv.config();

/**
 * Start Express server.
 */
let server: any;
mongoose
  .connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to MongoDB');
    server = app.listen(app.get('port'), () => {
      logger.info(`Listening to port ${app.get('port')}`);
    });
  })
  .catch((err) => {
    logger.error(`MongoDB connection error ${err}`);
  });
