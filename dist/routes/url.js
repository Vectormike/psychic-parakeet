"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const url_1 = require("../controller/url");
const express = require('express');
const router = express.Router();
router.post('/shorten', url_1.shorten);
exports.default = router;
//# sourceMappingURL=url.js.map