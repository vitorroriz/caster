import express = require("express");
import path from 'path';
import fs = require('fs');
const app = express();
const SERVER_PORT = 8095;
const PUBLIC_IMAGES = 'public/images';
const PUBLIC_VIDEOS = 'public/videos';
type HostedVideo = {fileName: string;}

app.use(express.static(path.join(__dirname,'..', 'public')));
app.get('/ls', (req, res) => {
    const files: HostedVideo[] = [];
    fs.readdirSync(PUBLIC_IMAGES).forEach(file => {
    files.push({fileName: file});
});
    res.writeHead(200,  {'Access-Control-Allow-Origin': '*'})
    res.end(JSON.stringify(files));
});

app.listen(SERVER_PORT);
console.log(`Listening on Port ${SERVER_PORT}`);