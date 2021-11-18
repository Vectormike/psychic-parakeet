/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import http from 'http-status';
import urlRoute from './routes/url';
import Url from './models/url';
import ApiError from './utils/ApiError';

dotenv.config();

// Create Express server
const app: express.Express = express();

app.use(cors());

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors(options));

app.use('/url', urlRoute);
app.get('/:code', async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const url = await Url.findOne({ urlID: code });
    if (!url) {
      throw new ApiError(http.BAD_REQUEST, 'Url not available');
    }
    return res.redirect(url.originalUrl);
  } catch (error) {
    console.log(error);
  }
});
app.use((_req, res): void => {
  res.status(404).send({
    success: false,
    error: 'Route not found',
  });
});

export default app;
