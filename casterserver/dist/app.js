"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path_1 = __importDefault(require("path"));
var fs = require("fs");
var constants_1 = require("./constants");
var app = express();
var SERVER_PORT = 8095;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    next();
});
var publicDirectory = path_1.default.join(constants_1.PUBLIC_DIRECTORY);
app.use(express.static(publicDirectory));
console.log("serving " + publicDirectory);
app.get('/ls', function (req, res) {
    var files = [];
    fs.readdirSync(publicDirectory).forEach(function (file) {
        if (path_1.default.extname(file).toLowerCase() === '.m3u8') {
            files.push(file);
        }
    });
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(files));
});
app.listen(SERVER_PORT);
console.log("Listening on Port " + SERVER_PORT);
