import { useState, useEffect } from "react";

import PostContent from "./snippets/PostContent";
import YTDownloadContent from "./snippets/YTDownloadContent";



function Home() {
  const [value, setValue] = useState('');
  const [videoDataThumbNails, updateVideoDataThumbNails] = useState([]);
  const [loader, isLoading] = useState(false);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function convertVideo() {
    isLoading(true);
    fetch(`http://localhost:4000/videoInfo?videoURL=${value}`)
    .then(res => res.json())
    .then(json => {
      updateVideoDataThumbNails(json['videoDetails']['thumbnails']);
      isLoading(false);
    });
  }
  

  function downloadImage(url) {
    isLoading(true);
    fetch(`http://localhost:4000/downloadImage?url=${url}&filename=image`)
    .then(res => res.json())
    .then(json => {
      let downloadLinkBtn = document.createElement('a');
      downloadLinkBtn.setAttribute('href',`/${json[0]['path']}`);
      downloadLinkBtn.setAttribute('download','image');
      document.body.appendChild(downloadLinkBtn);
      downloadLinkBtn.click();
      downloadLinkBtn.remove();
      isLoading(false);
    });
  }
  
  return (
    <>
    { loader &&
      <>
        <div className="loader">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div className="loader-background" />
      </>
      }
      <div className="container py-5">
        <div className="row justify-content-center ">
          <div className="col-md-8 mb-2">
            <input type="text" className="form-control border-danger input" placeholder="Paste your Youtube link here" onChange={handleChange} />
          </div>
          <div>
            <button className="btn-danger btn " onClick={convertVideo} target="_blank">Convert</button>
          </div>
        </div>
      </div>
     

      <div className="container text-center">
        {videoDataThumbNails.length > 0 && <img src={videoDataThumbNails[0].url} />}
        <div className="row justify-content-around mb-5">
          {videoDataThumbNails.map(thumbNailData=>{
            return <div key={thumbNailData.url} className="col-md-2 mt-5" >
              
              <button className="btn btn-danger"  onClick={()=>{
                downloadImage(thumbNailData.url);
              }} >{thumbNailData.width} * {thumbNailData.height}</button>
            
            
            </div>
          })}
        </div>
      </div>
      
      
      <PostContent />
      <YTDownloadContent />
      <style jsx>{
        `
          .input {
            outline: none; // disable default focus styles
          }
          .input:focus {
            box-shadow: 0px 0px 5px rgb(225 121 131 / 50%) !important;
          }

          .loader {
            height: 200px;
            width: 200px;
            margin:auto;
            position: fixed;
            top: 50%;
            left: 50%;
            z-index: 1000;
            transform: translate(-50%);
          }
          .loader > div {
            height: inherit;
            width: inherit;
            position: absolute;
            animation-name: rotate;
            animation-duration: 2s;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
          }
          .loader > div > div {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background: #dc3545;
            position: absolute;
            top: 0%;
            right: 50%;
            transform: translate(50%, 0%);
          }
          .loader > div:nth-child(2) {
            animation-delay: 0.2s;
          }
          .loader > div:nth-child(3) {
            animation-delay: 0.4s;
          }
          .loader > div:nth-child(4) {
            animation-delay: 0.6s;
          }
          @keyframes rotate {
            0% {
              transform: rotate(0);
            }
            50% {
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .loader-background{
            background: #afafaf;
            opacity: 0.3;
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            z-index: 100;
          }
        `
      }
      </style>
    </>
  )
}

export default Home;
