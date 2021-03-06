"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_validator_1 = require("../validation/auth.validator");
var auth_controller_1 = require("../controllers/auth.controller");
var auth_1 = __importDefault(require("../middleware/auth"));
var keyServices_1 = require("../middleware/keyServices");
var route = express_1.Router();
route.get("/confirm/:id", auth_controller_1.confirmEmail);
route.post('/register', auth_validator_1.registerValidator, auth_controller_1.userRegister);
route.post("/login", auth_validator_1.loginValidator, auth_controller_1.userLogin);
route.use(auth_1.default);
route.get('/key', function (req, res) { res.send(keyServices_1.generateKey()); });
route.get('/getkey/:id', auth_controller_1.getApiKey);
route.get("/getusers/:id", auth_controller_1.getUsers);
exports.default = route;
