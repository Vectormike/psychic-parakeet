"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const url_1 = __importDefault(require("../controller/url"));
const express = require('express');
const router = express.Router();
router.post('/shorten', url_1.default);
exports.default = router;
//# sourceMappingURL=url.js.map