// gatsby-ssr.js

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
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
	]);
};
