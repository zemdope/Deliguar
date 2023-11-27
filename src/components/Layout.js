import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
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
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5B442CLK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
				<CookieBanner />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
