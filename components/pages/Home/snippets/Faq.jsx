import React from 'react'
import Accordian from './Accordian'

function FAQ() {
  return (
    // bg-dark-primary
    <>
    <hr className="m-0"/>
    <div className=" py-5">
      
        <div className="pb-3  container text-dark">
          <h3 className="text-center h2  mb-5">FAQs Regarding YouTube Thumbnail Downloader</h3>
          <Accordian isOpen heading="What is thumbnail in YouTube?">
            
            <p className="card-text">Thumbnail is the preview image of any form of content. Every website use Thumbnails to give an idea about the content.</p>
        
          </Accordian>

          <Accordian isOpen heading="What is the size of YouTube thumbnail?">
            <p className="card-text">YouTube thumbnail resolution is 1280x720 (with minimum width of 640 pixels).</p>
          </Accordian>
          <Accordian isOpen heading="How this YouTube Thumbnail Grabber Works?">
            <p className="card-text">When you enter any YouTube video URL it shows the different size of a thumbnail. Click on the Download button to get it.</p>
          </Accordian>
        
          <Accordian isOpen heading="Do you have any App?">
            <p className="card-text">Currently, we do not have any app to download YouTube thumbnails. We may release in future.</p>
          </Accordian>

          <Accordian isOpen heading="Thumbnails downloaded from this website are copyright-free?">
          <p className="card-text">All images belong to their respected owners. If you download any image for professional usage, please ask the file owner before using it.</p>
          </Accordian>


        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      </>
  )
}

export default FAQ
