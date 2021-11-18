"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
const mongoose_1 = __importDefault(require("mongoose"));
const urlSchema = new mongoose_1.default.Schema({
    urlID: { type: String, required: true },
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
});
const Url = mongoose_1.default.model('Url', urlSchema);
exports.default = Url;
//# sourceMappingURL=url.js.map