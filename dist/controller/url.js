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
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("../services/url");
const shorten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield (0, url_1.addOriginalUrl)(req.body);
    return res.status(200).json({
        success: true,
        message: 'Url Shorten Successful',
        data: url,
    });
});
exports.default = shorten;
//# sourceMappingURL=url.js.map