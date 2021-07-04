import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import Footer from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../AppContextProvider'

const setup = (contextMock = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...contextMock}>
        <Footer/>
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<Footer />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
