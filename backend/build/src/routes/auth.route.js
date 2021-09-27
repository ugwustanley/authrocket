"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var route = express_1.Router();
route.post('/register', function (req, res) {
    res.send("registration side is reached");
});
route.post("/login", function (req, res) {
    res.send("login part is reached");
});
exports.default = route;
