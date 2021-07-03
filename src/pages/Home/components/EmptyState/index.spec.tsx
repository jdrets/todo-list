import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import EmptyState from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <EmptyState />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<EmptyState />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
