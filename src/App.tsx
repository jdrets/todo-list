import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './components/GlobalStyle';

import theme from './utils/constants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Hello To do List!
    </ThemeProvider>
  );
}

export default App
