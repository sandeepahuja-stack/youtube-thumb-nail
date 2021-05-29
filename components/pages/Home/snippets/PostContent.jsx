import PostCard from "../../../snippets/postcontentcard";


function PostContent() {
  const postContentAry1 = [
    {
      bg: 'bg1',
      heading: 'Fast and easy to use',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/fast.svg',
      alt: 'Fast and easy to use',
    },
    {
      bg: 'bg2',
      heading: 'Without limitation',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/loop.svg',
      alt: 'Without limitation',
    },
    {
      bg: 'bg3',
      heading: '100% Safe and Clean',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/shield.svg',
      alt: '100% Safe and Clean',
    },
  ];
  const postContentAry2 = [
    {
      bg: 'bg4',
      heading: 'Full platforms supported',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/ux-design.svg',
      alt: 'Full platforms supported',
    },
    {
      bg: 'bg5',
      heading: 'Full file format supported',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/instructions.svg',
      alt: 'Full file format supported',
    },
    {
      bg: 'bg6',
      heading: 'Cloud support',
      para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      url: '/static/svg/computing.svg',
      alt: 'Cloud support',
    },
  ];
  
  return (
    <>
      <div className=" py-5">
        <div className="container">
          <div className="pb-3 ">
            <h2 className="text-center h1 ">The Best Youtube Thumbnail Downloader</h2>
            <p className="text-dark  text-center" >Text of the printing and typesetting industry. Lorem Ipsum has ext of the printing and typesetting industry. Lorem Ipsum has ext of the printing and typesetting industry. Lorem Ipsum has </p>
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
