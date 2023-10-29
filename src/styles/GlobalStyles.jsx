import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
        
  }

a,
  a:visited {
    cursor: pointer;
    text-decoration: none;
  }
  
  html,
  body {
    color: #fff;
    font-family: 'Roboto', sans-serif;


  }  
  

   
`;
