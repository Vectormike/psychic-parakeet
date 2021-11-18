/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { shorten } from '../controller/url';

const express = require('express');

const router = express.Router();

router.post('/shorten', shorten);

export default router;
