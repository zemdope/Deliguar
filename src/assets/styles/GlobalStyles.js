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
    
    
    
  }
  body { 
    scroll-behavior: smooth;
  }
  main {
    background-color:#FFFBF5;
  } 
  section {
    /* max-width:1920px; */
    margin-inline:auto;

  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    overflow-x: hidden;

  }
  
  h1,h2,h3,h4,h5,h6 {

    font-weight: 900;
    line-height: 1.2;
    /* letter-spacing:2px; */

    font-family: "Americane";

  }
  
  p, li, a {
    font-family: "Open sans", sans-serif; 
    font-weight:normal;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  a {
    cursor: pointer;
    white-space:nowrap;
    text-decoration:none;
  }
`;
