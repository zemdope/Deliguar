import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
background-color: #ffffff;
    font-size: 62.5%;
    scroll-behavior: smooth;
    margin: 0;
    overflow-x: hidden;
    @font-face {
	font-family: 'americane';
	font-weight: normal;
	font-style: normal;
	src: 
	  url('../fonts/regular.otf') format('otf'); 
   }
   /* @font-face {
	font-family: 'MADE Tommy2';
	font-weight: light;
	font-style: normal;
	src: url('../../Fonts/made_tommy_soft_light-webfont.woff') format('woff'),
	  url('../../Fonts/made_tommy_soft_light-webfont.woff2') format('woff2'),
	  url('../../fonts/MADE\ Tommy\ Soft\ Light.otf') format('otf');
   } */
    
    
  }
  body { 
    scroll-behavior: smooth;
  }
  main {
    background-color:#FFFBF5;
  } 
  section {
    max-width:1920px;
    margin-inline:auto;
    padding-inline:24px; 
@media (min-width: 480px) {
  padding-inline:32px;
  padding-top:32px;
}
@media (min-width: 768px) {
  padding-inline:50px;
  padding-top:50px;
}
@media (min-width: 1024px) {
  padding-inline:80px;
  padding-top:80px;
}
@media (min-width: 1680px) {
  padding-inline:165px;
  
}
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    overflow-x: hidden;

  }
  
  h1,h2,h3,h4,h5,h6 {
	font-family: "Open sans", sans-serif; 
	margin-top:150px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing:2px;
  }
  
  p, li, a {
    font-family: "Open sans", sans-serif; 
    font-weight:normal;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  a {
    cursor: pointer;
  }
`;
