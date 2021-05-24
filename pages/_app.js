import React from "react";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
      <style>
        {`
          .bg1 {
            background: #d2e3fc
          }

          .bg2 {
            background: #fad2cf
          }

          .bg3 {
            background: #ceead6
          }

          .bg4 {
            background: #feefc3
          }

          .bg5 {
            background: #ffd5ec
          }

          .bg6 {
            background: #d1f4ff
          }`}
      </style>
    </Layout>
  )
}