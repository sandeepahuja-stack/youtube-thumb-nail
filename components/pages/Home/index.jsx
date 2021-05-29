import { useState } from "react";
// import Link from "next/link";
import PostContent from "./snippets/PostContent";
import YTDownloadContent from "./snippets/YTDownloadContent";
const API_URL = process.env.API_URL;


function Home() {
  const [value, setValue] = useState('');
  const [videoDataThumbNails, updateVideoDataThumbNails] = useState({});
  const [loader, isLoading] = useState(false);


  const [videoData, updateVideoData] = useState([]);
  const [videoTitle, updateVideoTitle] = useState('');
  // const [downloadLink, updateDownLoadLink] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }
  function convertVideo() {
    isLoading(true);
    fetch(`${API_URL}check/streams/`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       url: value
      })
     })
    .then(res => res.json())
    .then(json => {
      const videoAry = json['resolution']['mp4'];
      updateVideoData(videoAry);
      updateVideoTitle(json['title']);
      updateVideoDataThumbNails(json['thumnailUrl']);
      isLoading(false);  
    });
  }
  

  function download(pixel,type) {
    isLoading(true);
    
    fetch(`${API_URL}download/${type}/`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       url: value,
       pixel,
       type
      })
     })
    .then(res => res.json())
    .then(json => {
      let downloadLinkBtn = document.createElement('a');
      // console.log(json['downloadLink']);
      // let link = 'http://35.154.100.89:8000/static/thumbnails/Mere-Haath-Mein-%7C-Fanaa--%7C-Sonu-Nigam-Cover%7C--Day-41-%7C-100-Day-Piano-Challenge-%7C-Manoj-Abraham.jpg';
      // updateDownLoadLink(link);
      downloadLinkBtn.setAttribute('href',`${json['downloadLink']}`);
      // downloadLinkBtn.setAttribute('href',link);
       downloadLinkBtn.setAttribute('target',`_blank`);
      // passHref={true}
	    console.log(json['downloadLink']);
      downloadLinkBtn.setAttribute('download','image');
      document.body.appendChild(downloadLinkBtn);
      downloadLinkBtn.click();
      //downloadLinkBtn.remove();
      isLoading(false);
    });
  }
  
  return (
    <>
    {/* <Link href={`http://`+downloadLink} passHref={true} > <a>here download</a></Link> */}
    {/* <Link href={`${downloadLink}`} passHref={false}><a className="text-danger text-decoration-none">Youtube Downloader</a></Link> */}
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
      <div >
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
      
     
      {videoTitle && <h2 className="text-center mb-5">{videoTitle}</h2>}
      {Object.keys(videoDataThumbNails).length > 0 && 
        <>
          {/* <hr/> */}
          <div className="container text-center  mb-5">
            {/* <h2 className="mt-0 mb-5"> Download Thumbnail</h2> */}
            <img src={videoDataThumbNails[Object.keys(videoDataThumbNails)[0]]} style={{width:'320px', height: '180px'}}/>
            <p className="font-weight-bold mt-5 h2">Download Thumbnails</p>
            <hr />
            <div className="row justify-content-around">
              {Object.keys(videoDataThumbNails).map(thumbNailKey=>{
                return <div key={videoDataThumbNails[thumbNailKey]} className="col-md-2 mb-2" >
                  
                  <button className="btn btn-danger"  onClick={()=>{
                    download(thumbNailKey,'thumbnail');
                  }} >{thumbNailKey} <img src="/static/svg/download.svg" height="15px" /></button>
                
                
                </div>
              })}
            </div>
            {videoData.length > 0 &&
              <>
                <p className="font-weight-bold mt-5 h2">Download Videos</p>
                <hr />
                <div className="row justify-content-around">
                  {videoData.map(video=>{
                    return <div key={video} className="col-md-2 mb-2" >
                        <button className="btn btn-danger"  onClick={()=>{
                          download(video,'video');
                        }} >{video} <img src="/static/svg/download.svg" height="15px" /></button>
                      
                      
                    </div>
                  })}
                </div>
              </>
            }
            
          </div>
          <hr className="my-5" />
        </>
      }
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
