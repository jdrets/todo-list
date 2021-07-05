import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import FiltersBar from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    openFilterModal: jest.fn(),
    setFilters: jest.fn(),
    filters: {
      title: 'dummy title'
    }
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

  test('should call setFilters when delete button is clicked', () => {
    const setFiltersMock = jest.fn()
    const { getByTestId } = setup({
      setFilters: setFiltersMock
    })

    const deleteButton = getByTestId('chip-close-button')

    fireEvent.click(deleteButton)

    expect(setFiltersMock).toHaveBeenCalled()
  })
})
