"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const User_1 = __importDefault(require("../controller/User"));
const express = require('express');
const router = express.Router();
router.post('/register', User_1.default);
exports.default = router;
//# sourceMappingURL=User.js.map