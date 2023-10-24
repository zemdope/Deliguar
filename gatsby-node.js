
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
   
	const result = await graphql(`
	  query {
	    allContentfulRedirect {
    nodes {
	sourceUrl
	targetUrl
   }
 }
	  }
	`);

	const redirects = result.data.allContentfulRedirect.nodes;
   
	// Create 301 redirects using createRedirect
	redirects.forEach(({ sourceUrl, targetUrl }) => {
		createRedirect({
	    fromPath: sourceUrl,
	    toPath: targetUrl,
	    isPermanent: true,
redirectInBrowser: true,
	  });
	});

   };  

   exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;
  
	// Define the path to your BlogPostTemplate
	const blogPostTemplate = require.resolve('./src/pages/BlogPostTemplate.js');
  
	// Fetch data from Contentful with the correct GraphQL query
	const result = await graphql(`
	  query {
		allContentfulBlogPost {
		  edges {
			node {
			  id
			  title
			  name
			  publishedDate(formatString: "DD-MM-YYYY")
			  image {
				publicUrl
			  }
			  content {
				raw
				references {
				  ... on ContentfulAsset {
					id
					publicUrl
					title
				  }
				}
			  }
			}
		  }
		}
	  }
	`);
  
	if (result.errors) {
	  console.error(result.errors);
	  return;
	}
  
	const blogPosts = result.data.allContentfulBlogPost.edges;
  
	// Create pages for each blog post
	blogPosts.forEach(({ node }) => {
	  createPage({
		path: `/blog/${node.id}`, // Define the URL structure for your blog post
		component: blogPostTemplate,
		context: {
		  id: node.id,
		  title: node.title,
		  image: node.image.publicUrl,
		  content: node.content,
		  name: node.name,
		  date: node.publishedDate,
		  references: node.content.references,
		},
	  });
	});
  };
  