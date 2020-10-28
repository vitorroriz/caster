import express = require("express");
import path from 'path';
import fs = require('fs');
import { PUBLIC_DIRECTORY } from "./constants";

type HostedVideo = {fileName: string;}

const app = express();
const SERVER_PORT = 8095;

 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  next();
});

const publicDirectory = path.join(PUBLIC_DIRECTORY);
app.use(express.static(publicDirectory));
console.log(`serving ${publicDirectory}`)

app.get('/ls', (req, res) => {
    let files: string[] = [];
    fs.readdirSync(publicDirectory).forEach(file => {
        if(path.extname(file).toLowerCase() === '.m3u8') {
            files.push(file);
        }
});
    res.writeHead(200,  {'Access-Control-Allow-Origin': '*'})
    res.end(JSON.stringify(files));
});

app.listen(SERVER_PORT);
console.log(`Listening on Port ${SERVER_PORT}`);