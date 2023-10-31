import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  
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
  
::-webkit-scrollbar {
  width: 0px;
}

   
`;
