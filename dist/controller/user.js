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
const user_1 = require("../services/user");
const createUserControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield (0, user_1.findByEmail)(req.body.email);
    if (userExists) {
        return res.status(400).json({
            success: false,
            error: 'User already exist',
        });
    }
    const user = yield (0, user_1.createUser)(req.body);
    return res.status(200).json({
        success: true,
        message: 'User Creation Successful',
        data: user,
    });
});
exports.default = createUserControler;
//# sourceMappingURL=User.js.map