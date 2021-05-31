import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router';



export default function MainLayout({ children }) {
  const {pathname} = useRouter();
  
  return (
    <>
    <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="bg-main-primary w-100 d-flex justify-content-between">
        <Link href="/"><a className="text-white text-decoration-none d-inline p-3 font-weight-semi ">Youtube Thumbnail Downloader</a></Link>
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
      </nav>
      { !!(pathname != '/') && <div className=" px-3 bg-dark-primary py-60" >
            <div className="container py-5 bg-light-primary  hero-container">
                <h1 className="text-center mb-2 mt-0  "><Link href="/"><a className="text-white text-decoration-none">Youtube Thumbnail Downloader</a></Link></h1>
                <p className="text-center   font-weight-semi text-white">Convert and download Youtube videos in MP3, MP4, 3GP for free</p>
            </div>
        </div>}
     <section className="">
        {children}
      </section>
      <footer className="bg-dark p-5">
        <Link href="/"><a className="text-white mr-2">Home</a></Link>
        <Link href="/about"><a className="text-white mr-2">About Us</a></Link>
        <Link href="/privacy-policy"><a className="text-white">Privacy Policy</a></Link>
      </footer>
    </>
  )
}
