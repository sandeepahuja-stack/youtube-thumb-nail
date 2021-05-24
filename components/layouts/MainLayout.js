import Link from "next/link";
import Head from 'next/head'

export default function MainLayout({ children }) {
  
  return (
    <>
    <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
     <section className="py-3">
        
        <h1 className="text-center  h2 "><Link href="/"><a className="text-danger text-decoration-none">Youtube Downloader</a></Link></h1>
        <p className="text-center m-0 text-dark font-weight-semi">Convert and download Youtube videos in MP3, MP4, 3GP for free</p>
        <hr/>
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
