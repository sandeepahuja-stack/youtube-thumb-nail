import { useState } from "react";
import Link from "next/link";
const API_URL = process.env.API_URL;


function YoutubeThumbnail() {
  const [value, setValue] = useState('');
  const [videoDataThumbNails, updateVideoDataThumbNails] = useState([]);
  const [isError, updateIsError] = useState(false);
  const [loader, isLoading] = useState(false);

  

  function handleChange(e) {
    setValue(e.target.value);
    convertImage(e.target.value);
  }
  
  function convertImage(value){
    isLoading(true);
    fetch(`${API_URL}instagram/image?url=${value}`)
    .then(res => res.json())
    .then(json => {
        window.open(json.image_link);
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
    {/* <hr className="m-0"/> */}
      <div >
      {/* bg-dark-primary */}
        <div className="px-3   py-5" >
            <div className="container py-2 bg-light-primary  hero-container text-dark">
                <h1 className="text-center m-0 main-heading "><Link href="/"><a className="text-dark text-decoration-none">The Best Insta Thumbnail Downloader</a></Link></h1>
                <p className="text-center   font-weight-semi text-dark">Thumbnail Downloader helps you to save Insta thumbnail to your device.</p>
            
            
              <div className="row justify-content-center ">
                <div className="col-md-8 mb-2">
                  <input type="search" className="form-control input" placeholder="Paste your Insta link here" onChange={handleChange} />
                </div>
                <div>
                  <button className="btn-danger  btn " onClick={()=>{convertImage(value)}} target="_blank">Get Thumbnail</button>
                </div>
              </div>
              {isError && <p className="text-danger text-center m-0">Url entered is wrong</p>}
            </div>
        </div>
        <hr className="m-0"/>
        
          {videoDataThumbNails.length > 0 && 
            <>
              
              {/* <hr/> */}
              <div className="container text-center  my-5">
               
                <div className="row justify-content-around">
                  {videoDataThumbNails.map(thumbNailObj=>{
                    return <div key={thumbNailObj['url']+value} className="col-md-6 mb-5 text-center"  >
                      <img src={thumbNailObj['url']} className="mb-3 " style={{width:'320px', height: '180px'}}/>
                      <div >
                        <button className="btn btn-danger " onClick={()=>{downloadImage(thumbNailObj['url'])}} download  target="_blank">{thumbNailObj['size']} <img src="/static/svg/download.svg" height="18px" className="ml-1" /></button>
                      </div>
                    </div>
                  })}
                </div>
               
                
              </div>
              <hr className="mt-5 mb-0" />
            </>
          }
        
      </div>
      
      
      
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

export default YoutubeThumbnail;
