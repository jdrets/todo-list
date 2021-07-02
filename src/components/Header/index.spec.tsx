import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Header from '.'
import theme from '../../utils/constants/theme'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
)

describe('<Header />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call console.log when button is clicked', () => {
    const consoleLogMock = jest.fn()
    const { getByText } = setup()
    const button = getByText('Add new')

    console.log = consoleLogMock

    fireEvent.click(button)

    expect(consoleLogMock).toMatchSnapshot()
  })
})
