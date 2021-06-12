const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
var fs = require('fs');
var request = require('request');
const imageDownloader = require('node-image-downloader');

// Buildin with nodejs
const cp = require('child_process');
const readline = require('readline');
// External modules
const ffmpeg = require('ffmpeg-static');

app.use(express.json());
app.use(express.static("public"));


app.get("/",function(request,res){
//	response.sendFile(__dirname + "public/index.html");
		 res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

app.get("/api/videoInfo",async function(request,response){
	const videoURL = request.query.videoURL;
  
	const info = await ytdl.getInfo(videoURL);
	response.status(200).json(info);
});

app.get("/api/download",function(request,res){
	const videoURL = request.query.videoURL;
	const itag = request.query.itag;
  const videoName = request.query.videoName;
  const hasAudio =  request.query.hasAudio;

  const videoNameDownload = `${videoName}${Math.random()}.mp4`;
	// response.header("Content-Disposition",'attachment;\ filename="video.mp4"');
  res.header("Content-Disposition", `attachment;\  filename="${videoName}.mp4"`);
  if(hasAudio != 'false') {
    console.log("here i am", hasAudio);
    ytdl(videoURL,{
      filter: format => format.itag == itag
    }).pipe(res);
  } else { 
    res.header("Content-Disposition", `attachment;\  filename=${videoName}.mp4`);
    
    // Start the ffmpeg child process
    console.log("here i am");

    const tracker = {
      start: Date.now(),
      audio: { downloaded: 0, total: Infinity },
      video: { downloaded: 0, total: Infinity },
      merged: { frame: 0, speed: '0x', fps: 0 },
    };
    
    // Get audio and video streams
    const video = ytdl(videoURL,{
      filter: format => format.itag == itag
    });
    const audio = ytdl(videoURL, { filter: 'audioonly'});
    
    // Prepare the progress bar
    let progressbarHandle = null;
    const progressbarInterval = 1000;
    const showProgress = () => {
      console.log('here');
      readline.cursorTo(process.stdout, 0);
      const toMB = i => (i / 1024 / 1024).toFixed(2);
    
      process.stdout.write(`Audio  | ${(tracker.audio.downloaded / tracker.audio.total * 100).toFixed(2)}% processed `);
      process.stdout.write(`(${toMB(tracker.audio.downloaded)}MB of ${toMB(tracker.audio.total)}MB).${' '.repeat(10)}\n`);
    
      process.stdout.write(`Video  | ${(tracker.video.downloaded / tracker.video.total * 100).toFixed(2)}% processed `);
      process.stdout.write(`(${toMB(tracker.video.downloaded)}MB of ${toMB(tracker.video.total)}MB).${' '.repeat(10)}\n`);
    
      process.stdout.write(`Merged | processing frame ${tracker.merged.frame} `);
      process.stdout.write(`(at ${tracker.merged.fps} fps => ${tracker.merged.speed}).${' '.repeat(10)}\n`);
    
      process.stdout.write(`running for: ${((Date.now() - tracker.start) / 1000 / 60).toFixed(2)} Minutes.`);
      readline.moveCursor(process.stdout, 0, -3);
    };
    
    // Start the ffmpeg child process
    const ffmpegProcess = cp.spawn(ffmpeg, [
      // Remove ffmpeg's console spamming
      '-loglevel', '8', '-hide_banner',
      // Redirect/Enable progress messages
      '-progress', 'pipe:3',
      // Set inputs
      '-i', 'pipe:4',
      '-i', 'pipe:5',
      // Map audio & video from streams
      '-map', '0:a',
      '-map', '1:v',
      // Keep encoding
      '-c:v', 'copy',
      // Define output file
      `${videoNameDownload}`,
    ], {
      windowsHide: true,
      stdio: [
        /* Standard: stdin, stdout, stderr */
        'inherit', 'inherit', 'inherit',
        /* Custom: pipe:3, pipe:4, pipe:5 */
        'pipe', 'pipe', 'pipe',
      ],
    });
    ffmpegProcess.on('close', () => {
      console.log('done');
      // Cleanup
      process.stdout.write('\n\n\n\n');
      clearInterval(progressbarHandle);
      // res.download(`${videoName}${Date.now()}.mp4`)

      
      // res.download(`${videoNameDownload}`);

    });
    
    // Link streams
    // FFmpeg creates the transformer streams and we just have to insert / read data
    ffmpegProcess.stdio[3].on('data', chunk => {
      // Start the progress bar
      console.log(progressbarInterval, progressbarHandle);
      if (!progressbarHandle) progressbarHandle = setInterval(showProgress, progressbarInterval);

      
      
      // Parse the param=value list returned by ffmpeg
      const lines = chunk.toString().trim().split('\n');
      const args = {};
      for (const l of lines) {
        const [key, value] = l.split('=');
        args[key.trim()] = value.trim();
      }
      tracker.merged = args;
    });
    audio.pipe(ffmpegProcess.stdio[4]);
    video.pipe(ffmpegProcess.stdio[5]);
   

    // ffmpegProcess.stdio[5].pipe(fs.createWriteStream(`./${videoNameDownload}`));
  }






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
//   console.log('done');
// });

app.listen(4000);
