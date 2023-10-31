import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import * as G from './styles/GlobalStyles';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <>
        <G.GlobalStyle />
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;600&display=swap"
          />
        </Helmet>
        <MainPage />
      </>
    );
  }
}

export default App;
