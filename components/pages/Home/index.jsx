import { useState } from "react";
import Link from "next/link";
import PostContent from "./snippets/PostContent";
import YTDownloadContent from "./snippets/YTDownloadContent";
import FAQ from "./snippets/Faq";
import YoutubeEmbed from "../../snippets/YoutubeEmbeded/YoutubeEmbed";
// import axios from "axios";

const API_URL = process.env.API_URL;


function Home() {
  const [value, setValue] = useState('');
  const [videoDataThumbNails, updateVideoDataThumbNails] = useState([]);
  const [isError, updateIsError] = useState(false);
  const [loader, isLoading] = useState(false);
  const [isOpen, updateIsOpen] = useState(false);
  

  function handleChange(e) {
    setValue(e.target.value);
    convertImage(e.target.value);
  }
  
  function convertImage(value){
    let id = getYoutubeId(value);
    if (id) {
      updateIsError(false);
      let thumbNailAry =  [
        {
          size: 'HD Image (1280x720)',
          url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
        },
        {
          size: 'SD Image (640x480)',
          url: `https://img.youtube.com/vi/${id}/sddefault.jpg`
        },
        {
          size: 'Normal Image (480x360)',
          url: `https://img.youtube.com/vi/${id}/hqdefault.jpg`
        },
        {
          size: 'Normal Image (320x180)',
          url: `https://img.youtube.com/vi/${id}/mqdefault.jpg`
        },
        {
          size: 'Small Image (120x90)',
          url: `https://img.youtube.com/vi/${id}/default.jpg`
        }
      ]
      updateVideoDataThumbNails(thumbNailAry);
    } else {
      if(value != ''){
        updateIsError(true);
      } else {
        updateIsError(false);
      }
      updateVideoDataThumbNails([]);
    }

  }
  

  function downloadImage(url) {
    // isLoading(true);
    let id = getYoutubeId(value);
    axios({
      url, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', `${Date.now()}.jpg`); //or any other extension
       document.body.appendChild(link);
       link.click();
       link.remove();
    });
    // fetch(`${API_URL}downloadImage?url=${url}&filename=${id.replace(/ /g,"_")}`)
    // .then(res => res.json())
    // .then(json => {
    //   let downloadLinkBtn = document.createElement('a');
    //   downloadLinkBtn.setAttribute('href',`/${json[0]['path']}`);
    //   downloadLinkBtn.setAttribute('download',`image${Date.now()}`);
    //   document.body.appendChild(downloadLinkBtn);
    //   downloadLinkBtn.click();
    //   downloadLinkBtn.remove();
    //   isLoading(false);
    // });
  }
  function getYoutubeId(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(shorts\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[8].length==11)? match[8] : false;
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


    <YoutubeEmbed embedId="Tje77ziz8HU" isOpen={isOpen} updateIsOpen={updateIsOpen} header="How to Download?" />
      
    <hr className="m-0"/>
      <div >
      {/* bg-dark-primary */}
        <div className="px-3   py-5" >
            <div className="container py-2 bg-light-primary  hero-container text-dark">
                <h1 className="text-center m-0 main-heading "><Link href="/"><a className="text-dark text-decoration-none">The Best YouTube Thumbnail Downloader</a></Link></h1>
                <p className="text-center   font-weight-semi text-dark">Thumbnail Downloader helps you to save YouTube thumbnail to your device.</p>
            
            
              <div className="row justify-content-center ">
                <div className="col-md-8 mb-2">
                  <input type="search" className="form-control input" placeholder="Paste your Youtube link here" onChange={handleChange} />
                  
                </div>
                <div>
                  <button className="btn-main  btn " onClick={()=>{convertImage(value)}} target="_blank">Get Thumbnail</button>
                </div>
              </div>
              <p className=" text-center mt-2 mb-0"><a href="javascript:void(0)" className="text-primary pointer font-weight-bold" onClick={()=>{
                updateIsOpen(!isOpen)
              }}>How to Download ?</a></p>
              {isError && <p className="text-danger text-center m-0">Url entered is wrong</p>}
              
            </div>
        </div>
        <hr className="m-0"/>
        
          {videoDataThumbNails.length > 0 && 
            <>
              
              {/* <hr/> */}
              <div className="container text-center  my-5">
                {/* <h2 className="mt-0 mb-5"> Download Thumbnail</h2> */}
                {/* {console.log(videoDataThumbNails, videoDataThumbNailsKeys[videoDataThumbNailsKeys.length-1])} */}
                
                {/* <p className="font-weight-bold mt-5 h2">Download Thumbnails</p> */}
                {/* <hr /> */}
                <div className="row justify-content-around">
                  {videoDataThumbNails.map(thumbNailObj=>{
                    return <div key={thumbNailObj['url']+value} className="col-md-6 mb-5 text-center"  >
                      <img src={thumbNailObj['url']} className="mb-3 " style={{width:'320px', height: '180px'}}/>
                      <div >
                        <button className="btn btn-main " onClick={()=>{downloadImage(thumbNailObj['url'])}} download  target="_blank">{thumbNailObj['size']} <img src="/static/svg/download.svg" height="18px" className="ml-1" /></button>
                      </div>
                    </div>
                  })}
                </div>
                {/* {videoData.length > 0 &&
                  <>
                    <p className="font-weight-bold mt-5 h2">Download Videos</p>
                    <hr />
                    <div className="row justify-content-around">
                      {videoData.map(video=>{
                        return <div key={video} className="col-md-2 mb-2" >
                            <button className="btn "  onClick={()=>{
                              download(video,'video');
                            }} >{video} {videoDataWithAudio.includes(video) ? '' : <> <img src="/static/svg/silent.svg" height="15px" className="mx-2" /></>}<img src="/static/svg/download.svg" height="15px" /></button>
                          
                          
                        </div>
                      })}
                    </div>
                  </>
                } */}
                
              </div>
              <hr className="mt-5 mb-0" />
            </>
          }
        
      </div>
      
      
      <PostContent />
      <YTDownloadContent />
      <FAQ />
      
      <style jsx>{
        `
          .input {
            outline: none; // disable default focus styles
            border-color: #606569;
            
            border-radius: 12px;
            height: 56px;
            padding: 17px 20px;
            font-size: 16px;
          }
          .input:focus {
            box-shadow: none;
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
            background: #3cb371;
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
