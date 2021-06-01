import React from 'react'

function YTDownloadContent() {
  return (
    // bg-dark-primary
    <>
    <hr className="m-0"/>
    <div className=" py-5">
      
        <div className="pb-3  container text-dark">
          <h2 className="text-center h2  ">YouTube Thumbnail Downloader</h2>
          <p className="text-dark  text-center ">
            Consider this website as the best and easy to use YouTube thumbnail downloader. Just enter the YouTube video link and download the thumbnail to your device. The highlighted feature of our website is fast, secure, 1-click download. Whether your internet connection is slow, our website helps you download the image as fast as possible. Consider sharing our website via the below sharing buttons.
          </p>
          
          <div className=" text-center">
            <p className="text-dark font-weight-bold">Share this site...</p>    
            <a href="#" className="mx-3">
              <img src="/static/svg/facebook.svg" width="30"/>
            </a>
          
            <a href="#" className="mx-3">
              <img src="/static/svg/linkedin.svg" width="30"/>
            </a>
          
            <a href="#" className="mx-3">
              <img src="/static/svg/twitter.svg" width="30"/>
            </a>
          </div>
          
        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      </>
  )
}

export default YTDownloadContent
