"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var auth_route_1 = __importDefault(require("./src/routes/auth.route"));
var app = express_1.default();
app.use(cors_1.default());
app.get('/', function (req, res) {
    res.send("Hello World");
});
app.use("v1", auth_route_1.default);
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("port running at " + PORT);
});
