import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Header from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../AppContextProvider'

const setup = (contextMock = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...contextMock}>
        <Header/>
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<Header />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call context function when button is clicked', () => {
    const setNewTaskModalMock = jest.fn()
    const contextMock = {
      value: {
        setNewTaskModal: setNewTaskModalMock
      }
    }
    const { getByText } = setup(contextMock)
    const button = getByText('Add new')

    fireEvent.click(button)

    expect(setNewTaskModalMock).toHaveBeenCalled()
  })
})
