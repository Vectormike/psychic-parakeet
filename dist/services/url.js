"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongUrl = exports.addOriginalUrl = void 0;
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const shortid_1 = __importDefault(require("shortid"));
const http_status_1 = __importDefault(require("http-status"));
const logger_1 = __importDefault(require("../utils/logger"));
const url_1 = __importDefault(require("../models/url"));
const validateUrl_1 = __importDefault(require("../utils/validateUrl"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const spleets = process.env.BASEURL;
const addOriginalUrl = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // get original url from user
    const { originalUrl } = payload;
    // generate a short ID
    const urlID = shortid_1.default.generate();
    // validate the original url
    const valideUrl = yield (0, validateUrl_1.default)(originalUrl);
    if (valideUrl !== true) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Url is invalid');
    }
    // check if url already exists
    const exists = yield url_1.default.findOne({ originalUrl });
    if (exists)
        return exists;
    const shortUrl = `${spleets}/${urlID}`;
    const url = new url_1.default({
        urlID,
        originalUrl,
        shortUrl,
    });
    yield url.save();
    return url;
});
exports.addOriginalUrl = addOriginalUrl;
const getLongUrl = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { urlID } = payload;
    try {
        const url = yield url_1.default.findOne({ urlID });
        if (!url) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Url not available');
        }
        return url;
    }
    catch (error) {
        logger_1.default.error(error);
    }
});
exports.getLongUrl = getLongUrl;
//# sourceMappingURL=url.js.map