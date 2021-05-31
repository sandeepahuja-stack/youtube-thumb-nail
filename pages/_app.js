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
        .bg{
          // background: #3cb371;
          background: #f6f6f6;
        }
          // .bg1 {
          //   // background: #d2e3fc;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }

          // .bg2 {
          //   // background: #fad2cf;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }

          // .bg3 {
          //   // background: #ceead6;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }

          // .bg4 {
          //   // background: #feefc3;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }

          // .bg5 {
          //   // background: #ffd5ec;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }

          // .bg6 {
          //   // background: #d1f4ff;
          //   // background: #9169d4;
          //   background: #bd2130;
          // }
          .btn-main{
            // background: #683fb3;
            // border: 1px solid #683fb3;
            // color: white;
            // background: #606569;
            background: #3cb371;
            border-radius: 12px;
            padding: 15px;
            display: inline-block;
            border: none;
            color: #fdfdfe;
            font-size: 17px;
            font-weight: 700;
            cursor: pointer;
            transition: all .3s;
            min-width: 180px;
          }
          .btn-main:hover{
            color: #fcfcfc;
            // color: #683fb3;
            // background: #ccb7f1;
          }

          .bg-dark-primary{
            // background: #ed6357;
            // background: #6a3fb6; 
            background: #3cb371;
          }
          .bg-main-primary{
            background: #3cb371; 
          }
          .bg-light-primary{
            // background: #f8d2cf;
            // background: #9169d4;
          }
          .py-60{
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .hero-container{
            border-radius: 17px 0;
          }
          
            .main-menu {
              display: flex;
            }
          
          @media only screen and (max-width: 600px) {
            .main-menu {
              display: none !important;
            }
            h1 {
              font-size: 24px;
            }
            h2, h3{
              font-size: 20px !important;
            }
          }
          `}
      </style>
    </Layout>
  )
}