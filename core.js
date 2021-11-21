const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
var fs = require('fs');
var request = require('request');
const imageDownloader = require('node-image-downloader');



let Crawler = require('crawler');
let bodyParser = require('body-parser');
let insta_video = require('./routes/insta_video');
let insta_image = require('./routes/insta_image');

app.use(express.json());
app.use(express.static("public"));


app.get("/",function(request,response){
	response.sendFile(__dirname + "public/index.html");
});

app.get("/videoInfo",async function(request,response){
  console.log("here");
	const videoURL = request.query.videoURL;
	const info = await ytdl.getInfo(videoURL);
	response.status(200).json(info);
});

app.get("/download",function(request,response){
	const videoURL = request.query.videoURL;
	const itag = request.query.itag;
	response.header("Content-Disposition",'attachment;\ filename="video.mp4"');
	ytdl(videoURL,{
		filter: format => format.itag == itag
	}).pipe(response);
});





app.get("/downloadImage",async function(request,response){
  const { query:{ url, filename} } = request;
  await imageDownloader({
    imgs: [{
      uri: url,
      filename: 'image'
    }],
    dest:'./static/images'
  }).then(info=>{
    response.status(200).json(info);
  }).catch(error=>console.log(error));
});


// var download = function(uri, filename, callback){
  
// };

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('Completed');
// });




app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.send('Yea, its Running!');
});

/**
 * @param /instagram/video?url=<Video url>
 */
app.get('/instagram/video', insta_video);

/**
 * @param /instagram/video?url=<Image url>
 */
app.get('/instagram/image', insta_image);

app.listen(4000);