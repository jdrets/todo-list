import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Chip from '.'
import theme from '../../utils/constants/theme'

const setup = (mockData = {}) => {
  const mock = {
    deleteFilter: jest.fn(),
    filter: ['dummy key', 'dummy value']
  }
  return render(
    <ThemeProvider theme={theme}>
      <Chip {...mock} {...mockData}>
        Button
      </Chip>
    </ThemeProvider>
  )
}

describe('<Chip />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call deleteFilter function when close button is clicked', () => {
    const mockOnClose = jest.fn()
    const mockData = {
      deleteFilter: mockOnClose
    }
    const { getByTestId } = setup(mockData)
    const button = getByTestId('chip-close-button')

    fireEvent.click(button)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
