/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

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
    console.log('Connected to MongoDB');
    server = app.listen(app.get('port'), () => {
      console.log(`Listening to port ${app.get('port')}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDB connection error ${err}`);
  });
