import React from 'react'

function FAQ() {
  return (
    // bg-dark-primary
    <>
    <hr className="m-0"/>
    <div className=" py-5">
      
        <div className="pb-3  container text-dark">
          <h3 className="text-center h2  mb-5">FAQs Regarding YouTube Thumbnail Downloader</h3>
          <div className="card mb-5">
            <h5 className="card-header">What is thumbnail in YouTube?</h5>
            <div className="card-body">
              <p className="card-text">Thumbnail is the preview image of any form of content. Every website use Thumbnails to give an idea about the content.</p>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header">What is the size of YouTube thumbnail?</h5>
            <div className="card-body">
              <p className="card-text">YouTube thumbnail resolution is 1280x720 (with minimum width of 640 pixels).</p>
            </div>
          </div>
          
        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      </>
  )
}

export default FAQ
