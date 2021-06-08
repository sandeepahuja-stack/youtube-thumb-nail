import React from 'react'

function YTDownloadContent() {
  const url = 'http://youtube.thumbnail-download.me/';
  return (
    // bg-dark-primary
    <>
    <hr className="m-0"/>
    <div className=" py-5">
      
        <div className="pb-3  container text-dark">
          <h2 className="text-center h2  ">YouTube Shorts Video Downloader</h2>
          <p className="text-dark  text-center ">
            Downloading YouTube shorts video in the official YouTube app is not possible. To download videos from YouTube shorts, you have to use our website. You can bookmark our website to use it again in future. Anyways, If You have YouTube shorts video URL, you can download the video to your device. Our website directly download videos from the YouTube server to your device.
          </p>
          
          <div className=" text-center">
            <p className="text-dark font-weight-bold">Share this site...</p>    
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" className="mx-3">
              <img src="/static/svg/facebook.svg" width="30"/>
            </a>
          
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" className="mx-3">
              <img src="/static/svg/linkedin.svg" width="30"/>
            </a>
          
            <a href={`https://twitter.com/share?url=${url}`} target="_blank" className="mx-3">
              <img src="/static/svg/twitter.svg" width="30"/>
            </a>

            <a href={`whatsapp://send?text=${url}`} data-action="share/whatsapp/share"  target="_blank" className="mx-3 whatsapp-share-btn">
              <img src="/static/svg/whatsapp.svg" width="30"/>
            </a>
          </div>
          
        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      <style>
        {`
        .whatsapp-share-btn{
          display: none;
        }
          @media screen and (max-width: 600px) {
            .whatsapp-share-btn{
              display: inline;
            }
          }`}
      </style>
    </>
  )
}

export default YTDownloadContent
