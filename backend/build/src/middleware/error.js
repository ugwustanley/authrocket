"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customError_1 = require("./customError");
var response_1 = require("./response");
var errors = function (error, req, res, next) {
    if (error instanceof customError_1.ValidationError) {
        res.status(error.status || 400).send(response_1.response(false, error.message, null));
    }
    if (error instanceof customError_1.AuthenticationError) {
        res.status(error.status || 400).send(response_1.response(false, error.message, null));
    }
    if (error.name == "JsonWebTokenError") {
        res.status(400).send(response_1.response(false, error.message, null));
    }
    if (error.name == "SyntaxError") {
        res.status(400).send(response_1.response(false, error.message, null));
    }
    else {
        res.status(500).send(response_1.response(false, error.message, null));
    }
};
exports.default = errors;
