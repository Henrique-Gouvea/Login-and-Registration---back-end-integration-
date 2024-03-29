"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const routerUser_1 = __importDefault(require("./routes/routerUser"));
const routerLogin_1 = __importDefault(require("./routes/routerLogin"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use('/user', routerUser_1.default);
app.use('/login', routerLogin_1.default);
exports.default = app;
