const youtubedl = require('youtube-dl');
const express = require("express");
const bodyParser = require("body-parser");
const ytdl = require('ytdl-core');
const fs = require('fs');
var cors = require('cors');
const app = express();
app.use(cors());
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

// Express body parser
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
   res.render("index")
});


app.post("/", (req, res) => {
//  const URL = req.body.url;
// console.log(URL);
res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');

ytdl(req.body.url, { filter: format => format.container === 'mp4' }).pipe(res);

// youtubedl.download(req.body.url, ["--format", "bestvideo[height<=1080]+bestaudio/best[height<=1080]"], { cwd: __dirname },
//   (err, output) => {
//
//     if (err) throw err;
//
//     console.log(output.join("\n"));
//   });
});





app.listen(3000, () => console.log("Example app listening at http://localhost: 3000"));
