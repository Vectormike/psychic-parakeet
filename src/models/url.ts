/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import mongoose from 'mongoose';

export type UrlDocument = mongoose.Document & {
  urlID: string;
  originalUrl: string;
  shortUrl: string;
};

const urlSchema = new mongoose.Schema<UrlDocument>({
  urlID: { type: String, required: true },
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

const Url = mongoose.model<UrlDocument>('Url', urlSchema);

export default Url;
