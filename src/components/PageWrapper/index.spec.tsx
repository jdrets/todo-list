import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import theme from '../../utils/constants/theme'
import AppContextProvider from '../AppContextProvider'

import PageWrapper from '.'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <PageWrapper>Main wrapper</PageWrapper>
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<PageWrapper />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
