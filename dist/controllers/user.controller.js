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
exports.deleteUser = exports.updateUser = void 0;
const constants_1 = require("../libs/constants");
const services_1 = require("../services");
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield services_1.userService.updateUser({
            body: req.body,
            user: req.user,
        });
        res.status(constants_1.OK).json({
            message: "Successfully updated user",
            user: response,
        });
    }
    catch (error) {
        console.error("Failed to update user", error.message);
        next(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield services_1.userService.deleteUser({
            user: req.user,
        });
        res.status(constants_1.OK).json({
            message: "Successfully deleted user",
            user: response,
        });
    }
    catch (error) {
        console.error("Failed to delete user", error.message);
        next(error);
    }
});
exports.deleteUser = deleteUser;
