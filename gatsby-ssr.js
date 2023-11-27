import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Typekit
    <link key='Americane' rel='stylesheet' href='https://use.typekit.net/vxc2kem.css' />,

    // Bootstrap
    <link
      key='Bootstrap'
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
      integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
      crossOrigin='anonymous'
    />,

    // Facebook Pixel
    <script
      key="facebook-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1043275847088378');
          fbq('track', 'PageView');
        `,
      }}
    />,

    // Google Site Verification
    <meta name="google-site-verification" content="onR0yqxmgJagS12-0c9tMRFgjic0UcXr07obONgPMGQ" />,

    // Google Tag Manager
    <script
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5B442CLK');
        `,
      }}
    />,

    // Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-289314974-1"></script>,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-289314974-1');
        `,
      }}
    />,

    // Additional Google Analytics
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JX359XRQK4"></script>,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JX359XRQK4');
        `,
      }}
    />,
  ]);
};
