module.exports = {
	siteMetadata: {
	  title: `Deliguar`,
	  siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
	  'gatsby-plugin-meta-redirect',
	  'gatsby-plugin-redirects', // Make sure 'gatsby-plugin-redirects' is at the top-level
	  // ...other plugins
	  {
		resolve: 'gatsby-source-contentful',
		options: {
		  accessToken: 'e-zmhxgJB2pTqsgNPQSzdtJ3bRXIo6EQuo34qJZ_xio',
		  spaceId: 'w5u0yujeh638',
		},
	  },
	  {
		resolve: 'gatsby-source-contentful',
		options: {
		  accessToken: 'ieo9sLmaW04vKRo9OMI16X6JvwSCcC4lfhM3cdKfq3A',
		  spaceId: '9q9vhc9ls96k',
		},
	  },
	  {
		resolve: `gatsby-plugin-google-fonts`,
		options: {
		  fonts: [`Open sans\:300,400,400,700`, `REM`],
		  display: 'swap',
		},
	  },
	  {
		resolve: 'gatsby-source-filesystem',
		options: {
		  name: 'images',
		  path: './src/assets/images/',
		},
		__key: 'images',
	  },
	  'gatsby-plugin-image',
	  'gatsby-plugin-sharp',
	  'gatsby-transformer-sharp',
	  'gatsby-plugin-styled-components',
	],
  };
   