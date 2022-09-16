"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/games", (req, res) => {
    return res.json([]);
});
app.post("/ads", (req, res) => {
    return res.status(201).json([]);
});
app.get("/games/:id/discord", (req, res) => {
    return res.json([]);
});
app.listen(3333);
