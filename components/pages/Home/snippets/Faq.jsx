import React from 'react'
import Accordian from './Accordian'

function FAQ() {
  return (
    // bg-dark-primary
    <>
    <hr className="m-0"/>
    <div className=" py-5">
      
        <div className="pb-3  container text-dark">
          <h3 className="text-center h2  mb-5">FAQs for YouTube Shorts Download</h3>
          <Accordian isOpen heading="Can we download normal YouTube videos using this website?">
            
            <p className="card-text"> Yes, you can download them. The process is the same for downloading normal YouTube videos.</p>
        
          </Accordian>

          <Accordian isOpen heading="Can I use these videos anywhere?">
            <p className="card-text">Make sure to get the content creator’s permission before using the video anywhere.</p>
          </Accordian>

          <Accordian isOpen heading="Is YouTube shorts available for Desktop?">
            <p className="card-text">For now, YouTube shorts only works on mobile devices. In future, they may or may not provide support for desktop.</p>
          </Accordian>
        
          <Accordian isOpen heading=" What is the length of YouTube Shorts Videos?">
            <p className="card-text">YouTube shorts videos are generally under 60 seconds.</p>
          </Accordian>

          {/* <Accordian isOpen heading="Thumbnails downloaded from this website are copyright-free?">
          <p className="card-text">All images belong to their respected owners. If you download any image for professional usage, please ask the file owner before using it.</p>
          </Accordian> */}


        </div>
        {/* <div className="row justify-content-around mb-5"></div> */}
      </div>
      </>
  )
}

export default FAQ
