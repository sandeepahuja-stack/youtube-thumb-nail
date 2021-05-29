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
            // background: #d2e3fc;
            background: #9169d4;
          }

          .bg2 {
            // background: #fad2cf;
            background: #9169d4;
          }

          .bg3 {
            // background: #ceead6;
            background: #9169d4;
          }

          .bg4 {
            // background: #feefc3;
            background: #9169d4;
          }

          .bg5 {
            // background: #ffd5ec;
            background: #9169d4;
          }

          .bg6 {
            // background: #d1f4ff;
            background: #9169d4;
          }
          .btn-purple{
            background: #683fb3;
            border: 1px solid #683fb3;
            // color: white;
            border-radius: 12px;
            padding: 15px 0;
            display: inline-block;
            border: none;
            color: #fdfdfe;
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
            transition: all .3s;
            width: 180px;
          }
          .btn-purple:hover{
            color: #683fb3;
            background: #ccb7f1;
          }

          .bg-dark-primary{
            // background: #ed6357;
            background: #6a3fb6;
          }

          .bg-light-primary{
            // background: #f8d2cf;
            background: #9169d4;
          }
          .py-60{
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .hero-container{
            border-radius: 17px 0;
          }
          `}
      </style>
    </Layout>
  )
}