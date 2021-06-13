import React from 'react'

function YTDownloadContent() {
  const url = process.env.BASE_URL;
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
