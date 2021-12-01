/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import shortid from 'shortid';
import http from 'http-status';
import * as dotenv from 'dotenv';
import Url, { UrlDocument } from '../models/url';
import validateUrl from '../utils/validateUrl';
import ApiError from '../utils/ApiError';

dotenv.config();

const spleets = process.env.BASEURL;

console.log(process.env);

const addOriginalUrl = async (payload: UrlDocument): Promise<UrlDocument> => {
  // get original url from user
  const { originalUrl } = payload;

  // generate a short ID
  const urlID = shortid.generate();

  // validate the original url
  const valideUrl = await validateUrl(originalUrl);

  if (valideUrl !== true) {
    throw new ApiError(http.BAD_REQUEST, 'Url is invalid');
  }

  // check if url already exists
  const exists = await Url.findOne({ originalUrl });
  if (exists) return exists;

  const shortUrl = `${spleets}/${urlID}`;

  const url = new Url({
    urlID,
    originalUrl,
    shortUrl,
  });

  await url.save();

  return url;
};

const getLongUrl = async (payload: any): Promise<any> => {
  const { urlID } = payload;
  try {
    const url = await Url.findOne({ urlID });
    if (!url) {
      throw new ApiError(http.BAD_REQUEST, 'Url not available');
    }
    return url;
  } catch (error) {
    console.log(error);
  }
};

export { addOriginalUrl, getLongUrl };
