"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.validationSchema = joi_1.default.object({
    email: joi_1.default.string()
        .max(150)
        .required()
        .email({
        minDomainSegments: 2
    }),
    password: joi_1.default.string()
        .min(6)
        .max(255)
        .required()
});
