import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Sidebar from "../snippets/Sidebar";
import { useState } from "react";



export default function MainLayout({ children }) {
  const {pathname} = useRouter();
  const [isOpen, updateOpen] = useState(false);
  return (
    <>
    <Head>
        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>YouTube Thumbnail Download Online - HD Quality</title>
        <meta property="og:title" content="YouTube Thumbnail Download Online - HD Quality" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="author" content="YouTube Thumbnail Download" />
        <meta property="og:site_name" content="YouTube Thumbnail Download" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youtube.thumbnail-download.me/" />
        <meta property="og:image" content="https://thumbnail-download.me/static/staticImage/og.jpg" />
        <link rel="icon" href="/static/svg/logo.svg" type="image/gif" sizes="16x16"></link>
        <meta name="description" content="Download YouTube video thumbnail image to your device. Get YouTube thumbnail image in HD, SD quality. Download thumbnail of youtube video." />
        <meta property="og:description" content="Download YouTube video thumbnail image to your device. YouTube thumbnail image in HD, SD quality. Download thumbnail of youtube video." />
      </Head>
      <nav className="bg-main-primary w-100 d-flex justify-content-between align-items-center">
        
        <Link href="/"><a className="text-white text-decoration-none d-flex p-3 font-weight-semi "><img src="/static/svg/logo.svg" className="mr-2" style={{borderRadius:'100%', border:'1px solid'}} height="25px" width="25px"/>Youtube Thumbnail Downloader</a></Link>
        <ul className="list-inline justify-content-end m-0 p-3 main-menu">
          <li>
            <a className="text-white text-decoration-none mr-2 p-3 font-weight-semi" href="/">Home</a>
          </li>
          <li>
            <a className="text-white text-decoration-none mr-2 p-3 font-weight-semi" href="/blog">Blog</a>
          </li>
          <li>
            <a className="text-white text-decoration-none mr-5 p-3 font-weight-semi" href="/contact">Contact Us</a>
          </li>
        </ul>
        <button className="btn sidebar-btn " onClick={()=>{updateOpen(true)}}><img src="/static/svg/hamburger.svg" height="25" width="25"/></button>
      </nav>
      <Sidebar updateOpen={updateOpen} isOpen={isOpen} />
      
      { !!(pathname != '/') && <div className=" px-3 bg-dark-primary py-60" >
            <div className="container py-5 bg-light-primary  hero-container">
                <h1 className="text-center mb-2 mt-0  "><Link href="/"><a className="text-white text-decoration-none ">Youtube Thumbnail Downloader</a></Link></h1>
                <p className="text-center   font-weight-semi text-white">Convert and download Youtube videos in MP3, MP4, 3GP for free</p>
            </div>
        </div>}
     <section className="">
        {children}
      </section>
      <footer className="bg-dark p-5">
        <Link href="/"><a className="text-white mr-2">Home</a></Link>
        <a className="text-white mr-2" href="/blog">Blog</a>
        <a className="text-white" href="/contact">Contact Us</a>
      </footer>
    </>
  )
}
