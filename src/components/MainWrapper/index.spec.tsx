import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Header from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../AppContextProvider'

const setup = () => {
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Header/>
      </AppContextProvider>
    </ThemeProvider>
  )
}

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
