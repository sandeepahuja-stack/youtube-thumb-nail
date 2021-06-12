import React, { useState } from "react";
import Link from "next/link";
import PostContent from "./snippets/PostContent";
import YTDownloadContent from "./snippets/YTDownloadContent";
import FAQ from "./snippets/Faq";
import Shortsinfo from "./snippets/Shortsinfo";
import YoutubeEmbed from "../../snippets/YoutubeEmbeded/YoutubeEmbed";
import HowToCreate from "./snippets/HowToCreate";
import DownloadYoutubeShorts from "./snippets/DownloadYoutubeShorts";

const API_URL = process.env.API_URL;

var primaryDarkColor = '#a80038';
function Home() {
  const [value, setValue] = useState('');
  const [videoData, updateVideoData] = useState([]);
  const [isError, updateIsError] = useState(false);
  const [loader, isLoading] = useState(false);
  const [isOpen, updateIsOpen] = useState(false);
  const [isDropdownOpen, updateIsDropdown] = useState(false);
  const [title, updateTitle] = useState('');
  const [thumnail, updateThumbnail] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    getVideo(e.target.value);
  }
  
  function getVideo(value){
    let id = getYoutubeId(value);
    if (id) {
      updateIsError(false);
      isLoading(true);
      updateThumbnail(`https://img.youtube.com/vi/${id}/sddefault.jpg`);
      fetch(`${API_URL}api/videoInfo?videoURL=${value}`)
      .then(res => res.json())
      .then(json => {
        
        isLoading(false);
        const videoDetails = json['videoDetails'];
        updateTitle(videoDetails['title']);
        const videoFormats = json['formats'];
        let onlyVideos = [];
        let audioVideos = [];
        let labels = [];
        videoFormats.map((video)=>{
          
          if (video['hasAudio'] && video['qualityLabel']) {
            audioVideos.push(video);
          } else if(!labels.includes(video['qualityLabel'])){
            onlyVideos.push(video);
          }

          if (video['qualityLabel'] && !labels.includes(video['qualityLabel'])) {
            labels.push(video['qualityLabel']);
          }
        })
        // const audioVideos = videoFormats.filter((el)=> el.hasAudio )
        // const onlyVideos = videoFormats.filter((el)=> !el.hasAudio )
        
        // console.log(videoFormats);
        updateVideoData([...audioVideos.reverse(),...onlyVideos]);
      });

    } else {
      if(value != ''){
        updateIsError(true);
      } else {
        updateIsError(false);
      }
      
    }

  }
  
  function toggleDropdown(){
    updateIsDropdown(!isDropdownOpen);
  }
  function download(url, itag) {
    isLoading(true);
    // fetch(`${API_URL}api/download?videoURL=${url}&itag=${itag}`)
    // .then(res => res.json())
    // .then(json => {
      
      let downloadLinkBtn = document.createElement('a');
      downloadLinkBtn.setAttribute('href',`${API_URL}api/download?videoURL=${url}&itag=${itag}`);
      downloadLinkBtn.setAttribute('download',`video${value}${itag}`);
      downloadLinkBtn.setAttribute('target',`_blank`);
      document.body.appendChild(downloadLinkBtn);
      downloadLinkBtn.click();
      downloadLinkBtn.remove();
      isLoading(false);
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
                <h1 className="text-center m-0 main-heading "><Link href="/"><a className="text-dark text-decoration-none">YouTube Shorts Video Download</a></Link></h1>
                <p className="text-center   font-weight-semi text-dark">Download YouTube shorts videos for free</p>
            
            
              <div className="row justify-content-center ">
                <div className="col-md-8 mb-2">
                  <input type="search" className="form-control input" placeholder="Paste your Youtube link here" onChange={handleChange} />
                  
                </div>
                <div>
                  <button className="btn-main  btn " onClick={()=>{getVideo(value)}} target="_blank">Get Video</button>
                </div>
              </div>
              <p className=" text-center mt-2 mb-0"><a href="javascript:void(0)" className="text-primary pointer font-weight-bold" onClick={()=>{
                updateIsOpen(!isOpen)
              }}>How to Download ?</a></p>
              {isError && <p className="text-danger text-center m-0">Url entered is wrong</p>}
              
            </div>
        </div>
        {/* <hr className="m-0"/> */}
              {/* <h2>{title}</h2> */}
          {videoData.length > 0 && 
            <>
              
              {/* <hr/> */}
              <div className="container   my-2 card card-body">
                
                <div className="row">
                  <div className="col-md-3"><img src={thumnail} width="100%" /></div>
                  <div className="col-md-9">
                    <h2 className="mt-2 mb-0 h4">{title}</h2>
                    
                    
                    {videoData.length > 0 &&
                      <>
                        
                        <hr />
                          <div className="btn-group">
                            <button key={videoData[0]['url']} className="btn btn-main rounded-0 d-block"  onClick={()=>{
                              download(value,videoData[0]['itag']);
                            }} >{videoData[0]['qualityLabel']} {videoData[0]['hasAudio'] ? '' : <> <img src="/static/svg/silent.svg" height="15px" className="mx-2" /></>}<img src="/static/svg/download.svg" height="15px" /></button>
                            <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleDropdown}>
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className={`dropdown-menu p-0 ${isDropdownOpen ? 'd-block' : ''}`}>
                              {videoData.map((video,index)=>{
                                if(video['qualityLabel'])
                                  if(index !== 0)
                                    return (
                                        <React.Fragment  key={video['url']}>
                                          {/* <div className="dropdown-divider"></div> */}
                                          <button className="btn btn-main rounded-0 border-bottom d-block"  onClick={()=>{
                                            download(value,video['itag']);
                                            toggleDropdown();
                                          }} >{video['qualityLabel']} {video['hasAudio'] ? '' : <> <img src="/static/svg/silent.svg" height="15px" className="mx-2" /></>}<img src="/static/svg/download.svg" height="15px" /></button>
                                        </React.Fragment>
                                    );
                                    
                              })}
                        
                            </div>
                          </div>
                        
                      </>
                    }
                  </div>
                </div>
              </div>
              {/* <hr className="mt-5 mb-0" /> */}
            </>
          }
        
      </div>
      
      
      <PostContent />
      <YTDownloadContent />
      <Shortsinfo />
      <HowToCreate />
      <DownloadYoutubeShorts />
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
            background: ${primaryDarkColor};
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
