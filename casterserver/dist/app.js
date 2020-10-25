"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path_1 = __importDefault(require("path"));
var fs = require("fs");
var app = express();
var port = 8000;
var PUBLIC_IMAGES = 'public/images';
app.use(express.static(path_1.default.join(__dirname, '..', 'public')));
app.get('/ls', function (req, res) {
    var files = [];
    fs.readdirSync(PUBLIC_IMAGES).forEach(function (file) {
        files.push({ fileName: file });
    });
    res.send(JSON.stringify(files));
});
app.listen(port);
console.log("Listening on Port " + port);
