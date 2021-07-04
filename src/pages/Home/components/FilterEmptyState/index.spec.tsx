import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import FilterEmptyState from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (contextMock = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...contextMock}>
        <FilterEmptyState />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<FilterEmptyState />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
