import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './components/GlobalStyle'
import AppContextProvider from './components/AppContextProvider'

import theme from './utils/constants/theme'

import Header from './components/Header'
import MainWrapper from './components/MainWrapper'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContextProvider>
        <Header />
        <MainWrapper>
          Main wrapper example
        </MainWrapper>
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App
