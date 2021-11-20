import PostCard from "../../../snippets/postcontentcard";


function PostContent() {
  const postContentAry1 = [
    {
      bg: 'bg1',
      heading: 'Daily Task List ',
      para: 'Daily Task List will be the part of this software application featuring the features that the user can add multiple task, and mark the priority of the task such as (Urgent, High , Medium , Low ), it is secured as the user data is only available in its client side in a local storage of the browser. If the task gets completed the user will select the checkbox or move it to completed status.',
      url: '/static/svg/clock.svg',
      alt: 'Daily Task List ',
      link: '/dailytask'
      
    },
    {
      bg: 'bg3',
      heading: 'YouTube Thumbnail Downloader',
      para: 'YouTube Thumbnail Downloader will be the part of this software application featuring the features that it can download the YouTube thumbnail of educational videos and songs. It will be able to extract or download the desired YouTube video by putting its URL and getting the desired result. Also, feasibility to get the HD quality thumbnail.',
      url: '/static/svg/safe.svg',
      alt: 'YouTube Thumbnail Downloader',
      link: '/yt-thumbnail'
    },
    {
      bg: 'bg5',
      heading: 'Instagram Photos Downloader',
      para: 'Instagram Photos Downloader will be the part of this software application featuring the features that it can download the Instagram Photos educational videos and songs. It will be able to extract or download the desired Instagram Photos video by putting its URL and getting the desired result. Also, feasibility to get the HD photos.',
      url: '/static/svg/support.svg',
      alt: 'Instagram Photos Downloader',
      link: '/insta-thumbnail'
    }
  ];
  const postContentAry2 = [
    {
      bg: 'bg4',
      heading: 'Instagram Video Downloader',
      para: 'Instagram Video Downloader will be the part of this software application featuring the features that it can download the Instagram educational videos and songs. It will be able to extract or download the desired Instagram video by putting its URL and getting the desired result. Also, feasibility to get the audio only.      ',
      url: '/static/svg/platform.svg',
      alt: 'Instagram Video Downloader',
      link: '/insta-video'
    },

    {
      bg: 'bg2',
      heading: 'YouTube Video Downloader',
      para: 'YouTube Video Downloader will be the part of this software application featuring the features that it can download the YouTube educational videos and songs. It will be able to extract or download the desired YouTube video by putting its URL and getting the desired result. Also, feasibility to get the audio only.',
      url: '/static/svg/limit.svg',
      alt: 'YouTube Video Downloader',
      link: '/yt-video'
    },
  ];
  
  return (
    <>
     <div className="container pb-5">
        <div className="pb-3 font-weight-bold">
          {/* <h2 className="text-center  ">The Best Youtube Downloader</h2> */}
          <p className="text-dark  text-center ">The purpose of this Web Portal is to do multiple tasks in an efficient manner so that the user can save its time and perform valid tasks without going to any other web portal.  
          
The main objective of a web portal is to efficiently evaluate the user's order task thoroughly with the best user experience, through a fully automated system that not only saves a lot of time but also gives fast results.
</p>
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
