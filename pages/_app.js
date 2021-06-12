import React from "react";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  var primarycolor = '#fd0054';
  var primaryDarkColor = '#a80038';
  var primaryWhite = '#fbf9fa';
  var darkColor = '#2b2024';
  return (
    <Layout>
      <Component {...pageProps} />
      <style>
        {`
        .bg{
          // background: #3cb371;
          background: ${primaryWhite};
        }
       
          .text-primary-link{
            color: ${primarycolor};
          }
          .btn-main{
            background: ${primarycolor};
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
          }

          .bg-main-primary{
            background: ${primarycolor}; 
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
            .bg-transparent-modal{
              background: rgba(0,0,0,.3);
            }
            .sidebar-btn{
              display: none; 
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
            .sidebar-btn{
              display: inline; 
            }
          }

         
          `}
      </style>
    </Layout>
  )
}