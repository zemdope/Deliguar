// gatsby-ssr.js

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<>
		<link
			key='Americane'
			rel='stylesheet'
			href='https://use.typekit.net/vxc2kem.css'
		/>,
		<link
			key='Bootstrap'
			rel='stylesheet'
			href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
			integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
			crossorigin='anonymous'
		/>
  
 <script
      key="facebook-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
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
</>
		
	]);
};
