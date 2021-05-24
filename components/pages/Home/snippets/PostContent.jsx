import PostCard from "../../../snippets/postcontentcard";


function PostContent() {
  const postContentAry1 = [
    {
      bg: 'bg1',
      heading: 'Fast and easy to use',
      para: 'Using our Youtube downloader is the fast and easy way to download and save any YouTube video to MP3 or MP4. Simply copy YouTube URL, paste it on the search box and click on "Convert" button. No register accounts needed. ',
      url: '/static/svg/clock.svg',
      alt: 'Fast and easy to use',
    },
    {
      bg: 'bg2',
      heading: 'Without limitation',
      para: 'Download and convert YouTube videos as much as you want without limitation and always free. ',
      url: '/static/svg/limit.svg',
      alt: 'Without limitation',
    },
    {
      bg: 'bg3',
      heading: '100% Safe and Clean',
      para: 'With the rising awareness of device security, people attach great importance to personal data. The service is totally clean with no virus under intense supervision based on security database.',
      url: '/static/svg/safe.svg',
      alt: '100% Safe and Clean',
    },
  ];
  const postContentAry2 = [
    {
      bg: 'bg4',
      heading: 'Full platforms supported',
      para: 'We support all device platforms. Easy to convert YouTube videos to MP3 files regardless of whether you are using Windows, Mac or Linux, Android, iPhone. ',
      url: '/static/svg/platform.svg',
      alt: 'Full platforms supported',
    },
    {
      bg: 'bg5',
      heading: 'Full file format supported',
      para: 'We support all video and audio formats conversion. You can easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO formats, etc.',
      url: '/static/svg/support.svg',
      alt: 'Full file format supported',
    },
    {
      bg: 'bg6',
      heading: 'Cloud support',
      para: 'We support uploading the converted files to your DropBox and Google Drive. ',
      url: '/static/svg/cloud.svg',
      alt: 'Cloud support',
    },
  ];
  
  return (
    <>
     <div className="container pb-5">
        <div className="pb-3 ">
          <h2 className="text-center  ">The Best Youtube Downloader</h2>
          <p className="text-dark  text-center ">YT1s YouTube Downloader helps you save Youtube videos to your device. You can choose from a variety of formats and qualities to download.</p>
        </div>
        <div className="row justify-content-around mb-5">
        {
          postContentAry1.map((postContentData,index) => {
            return (<div className="col-md-3 mb-3 px-2" key={postContentData.alt}>
              <PostCard {...postContentData} />
            </div>);
          })
        }
        </div>
        <div className="row justify-content-around mb-5">
        {
          postContentAry2.map(postContentData => {
            return (<div className="col-md-3 mb-3 px-2" key={postContentData.alt}> 
              <PostCard {...postContentData} />
            </div>);
          })
        }
        </div>
      </div>
    </>
  )
}

export default PostContent
