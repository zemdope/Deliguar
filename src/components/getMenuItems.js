import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from "gatsby-plugin-intl";

const Menu = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulMenuTop {
      nodes {
        node_locale
        url
        test
      }
    }
  }
  `);
 
  const intl = useIntl();
  const userLanguage = intl.locale === 'pl' ? 'pl' : 'en';
  const [language, setLanguage] = useState(userLanguage);
  
  // Define the target locale based on user's language
  const targetLocale = userLanguage === 'pl' ? 'en-US' : 'pl';
  
  // Filter the content based on the target locale
  const filteredData = data.allContentfulMenuTop.nodes.filter(
    (node) => node.node_locale === targetLocale
  );

  const menuItems = filteredData.length > 0 ? filteredData : [];

  return (
    <>
     
        {menuItems.map((menuItem) => (
          <li key={menuItem.test}>
            <Link to={menuItem.url} title={menuItem.test}>
              {menuItem.test}
            </Link>
          </li>
        ))}
  
    </>
  );
};

export default Menu;