
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
	  });
	});

   };  

 