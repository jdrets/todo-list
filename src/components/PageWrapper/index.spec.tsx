import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import theme from '../../utils/constants/theme'
import AppContextProvider from '../AppContextProvider'

import MainWrapper from '.'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <MainWrapper>Main wrapper</MainWrapper>
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<MainWrapper />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
