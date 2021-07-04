import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import EmptyState from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (contextMock = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...contextMock}>
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

  test('should call setNewModal context function when button is clicked', () => {
    const setShowCreateTaskModalMock = jest.fn()
    const contextMock = {
      value: {
        setShowCreateTaskModal: setShowCreateTaskModalMock
      }
    }
    const { getByText } = setup(contextMock)
    const button = getByText('Create task')

    fireEvent.click(button)

    expect(setShowCreateTaskModalMock).toHaveBeenCalled()
  })
})
