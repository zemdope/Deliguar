/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Deliguar`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: 'e-zmhxgJB2pTqsgNPQSzdtJ3bRXIo6EQuo34qJZ_xio',
				spaceId: 'w5u0yujeh638'
			}
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
			}
		}
	]
};
