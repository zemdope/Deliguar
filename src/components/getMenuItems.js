import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuTop {
        nodes {
          test
          url
        }
	 }
  }`);

  const menuItems = data.allContentfulMenuTop.nodes;

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
   