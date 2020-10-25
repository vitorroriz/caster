import express = require("express");
import path from 'path';
import fs = require('fs');
const app = express();
const port = 8000;
const PUBLIC_IMAGES = 'public/images';
type HostedVideo = {fileName: string;}
app.use(express.static(path.join(__dirname,'..', 'public')));
app.get('/ls', (req, res) => {
    const files: HostedVideo[] = [];
    fs.readdirSync(PUBLIC_IMAGES).forEach(file => {
    files.push({fileName: file});
});

    res.send(JSON.stringify(files));
});

app.listen(port);
console.log(`Listening on Port ${port}`);