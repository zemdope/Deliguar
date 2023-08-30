import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

const Layout2 = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<main>{children}</main>
			</ThemeProvider>
		</>
	);
};

export default Layout2;
