import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import FiltersBar from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    filters: [
      {
        label: 'dummy label',
        onClose: jest.fn()
      },
      {
        label: 'dummy label 2',
        onClose: jest.fn()
      }
    ]
  }
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <FiltersBar {...mock} {...mockData} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

describe('<FiltersBar />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
