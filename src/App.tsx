import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import GlobalStyle from './components/GlobalStyle'
import AppContextProvider from './components/AppContextProvider'

import theme from './utils/constants/theme'

import Header from './components/Header'

import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App
