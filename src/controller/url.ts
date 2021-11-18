/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { addOriginalUrl, getLongUrl } from '../services/url';

interface IResponse {
  status: any;
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
  redirect?: any;
}

const shorten = async (req: Request, res: IResponse): Promise<IResponse> => {
  const url = await addOriginalUrl(req.body);
  return res.status(200).json({
    success: true,
    message: 'Url Shorten Successful',
    data: url,
  });
};

export { shorten };
