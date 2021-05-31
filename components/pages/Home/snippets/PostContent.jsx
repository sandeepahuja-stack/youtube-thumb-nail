import PostCard from "../../../snippets/postcontentcard";


function PostContent() {
  const postContentAry1 = [
    {
      bg: 'bg',
      heading: 'Multiple Size',
      para: 'Download YouTube thumbnail image in Full HD, SD or Low Resolution. Instantly download YouTube thumbnail to your device.',
      url: '/static/svg/fast.svg',
      alt: 'Multiple Size',
    },
    {
      bg: 'bg',
      heading: 'Easy to Use',
      para: 'No Signup or Login required. Just enter YouTube URL and download the image directly. No need to open the image in the browser to save it.',
      url: '/static/svg/loop.svg',
      alt: 'Easy to Use',
    },
    {
      bg: 'bg',
      heading: 'Instant Download',
      para: 'Download thumbnail faster than any other website. Just hit the download button, and the image saves in your device instantly.',
      url: '/static/svg/shield.svg',
      alt: 'Instant Download',
    },
  ];
  const postContentAry2 = [
    {
      bg: 'bg',
      heading: 'Secure Download',
      para: 'Our website is fully secure by HTTPS protocol. Download YouTube thumbnail without any security or safety risk. ',
      url: '/static/svg/ux-design.svg',
      alt: 'Secure Download',
    },
    {
      bg: 'bg',
      heading: 'No Limitations',
      para: 'Download an unlimited number of YouTube thumbnails to your device. No premium plan or no limits at all.',
      url: '/static/svg/instructions.svg',
      alt: 'No Limitations',
    },
    {
      bg: 'bg',
      heading: 'Free to Use',
      para: 'Genuinely unlimited and free to use platform. No freemium or premium plans. Just download the thumbnail image you wish to.',
      url: '/static/svg/computing.svg',
      alt: 'Free to Use',
    },
  ];
  
  return (
    <>
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="text-center h2 ">The Best Youtube Thumbnail Downloader</h2>
            <p className="text-dark  text-center" >Thumbnail Downloader helps you to save YouTube thumbnail to your device. You can download different resolution images with a single click.</p>
          </div>
          <div className="row justify-content-around mb-5 px-2">
          {
            postContentAry1.map((postContentData,index) => {
              return (<div className="col-md-3 mb-3 px-2" key={postContentData.alt}>
                <PostCard {...postContentData} />
              </div>);
            })
          }
          </div>
          <div className="row justify-content-around mb-5 px-2">
        {
          postContentAry2.map(postContentData => {
            return (<div className="col-md-3 mb-3 px-2" key={postContentData.alt}> 
              <PostCard {...postContentData} />
            </div>);
          })
        }
        </div>
        </div>
      </div>
    </>
  )
}

export default PostContent
