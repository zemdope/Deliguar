/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Deliguar`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: [
		'gatsby-plugin-meta-redirect',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: 'e-zmhxgJB2pTqsgNPQSzdtJ3bRXIo6EQuo34qJZ_xio',
				spaceId: 'w5u0yujeh638'
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open sans\:300,400,400,700`, `REM`],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/'
			},
			__key: 'images'
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components'
	]
};
