import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'


import HomePage from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../../components/AppContextProvider'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <HomePage />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<HomePage />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
