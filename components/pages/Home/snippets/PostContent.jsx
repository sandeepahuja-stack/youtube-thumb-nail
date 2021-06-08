import PostCard from "../../../snippets/postcontentcard";


function PostContent() {
  const postContentAry1 = [
    {
      bg: 'bg',
      heading: 'Fast Downloading',
      para: 'Download YouTube shorts videos with ultra-fast speed. We do not limit bandwidth for downloading videos.',
      url: '/static/svg/fast.svg',
      alt: 'Fast Downloading',
    },
    {
      bg: 'bg',
      heading: 'No Limit',
      para: 'Download as many videos as you want to download. No signup or login required to download shorts videos.',
      url: '/static/svg/loop.svg',
      alt: 'No Limit',
    },
    {
      bg: 'bg',
      heading: 'Fully Secure',
      para: 'No risk of malware on your device. Our website is fully secure with HTTPS protocol. Worry-free download.',
      url: '/static/svg/shield.svg',
      alt: 'Fully Secure',
    },
  ];
  const postContentAry2 = [
    {
      bg: 'bg',
      heading: 'Select Quality',
      para: 'You can download videos of different quality, with or without sound. Select the video quality and it will download the video.',
      url: '/static/svg/ux-design.svg',
      alt: 'Select Quality',
    },
    {
      bg: 'bg',
      heading: 'User-Friendly',
      para: 'Our website specially designed for mobile users. Fully user-friendly website to make your work even easier.',
      url: '/static/svg/instructions.svg',
      alt: 'User-Friendly',
    },
    {
      bg: 'bg',
      heading: 'Free to Use',
      para: 'Fully free to download shorts videos. We do not ask for any subscription or login information to download.',
      url: '/static/svg/computing.svg',
      alt: 'Free to Use',
    },
  ];
  
  return (
    <>
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="text-center h2 ">YouTube Shorts Video Download Features</h2>
            <p className="text-dark  text-center" >List of top features</p>
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
