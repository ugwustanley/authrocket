"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_validator_1 = require("../validation/auth.validator");
var route = express_1.Router();
route.post('/register', auth_validator_1.emailPasswordValidator, function (req, res) {
    res.send("registration side is reached");
});
route.post("/login", auth_validator_1.emailPasswordValidator, function (req, res) {
    res.send("login part is reached");
});
exports.default = route;
