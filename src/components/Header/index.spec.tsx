import React from 'react'
import { ThemeProvider } from 'styled-components'
import routeData from 'react-router'

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
    jest.spyOn(routeData, 'useLocation').mockReturnValue({
      pathname: '/'
    })

    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call context function when button is clicked', () => {
    const setShowCreateTaskModal = jest.fn()
    const contextMock = {
      value: {
        setShowCreateTaskModal: setShowCreateTaskModal
      }
    }
    const { getByText } = setup(contextMock)
    const button = getByText('Add new')

    fireEvent.click(button)

    expect(setShowCreateTaskModal).toHaveBeenCalled()
  })

  test('should match with snapshot when button is not allowed', () => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue({
      pathname: '/invalid-path'
    })

    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
