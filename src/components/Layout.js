import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const Layout = ({  children }) => {

	
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}> 
				<Navbar  />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
