import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './components/GlobalStyle'

import theme from './utils/constants/theme'

import Header from './components/Header'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
