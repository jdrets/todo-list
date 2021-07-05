import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import AddTaskModal from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    open: true,
    onClose: jest.fn(),
    showSnackbar: jest.fn()
  }
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <AddTaskModal {...mock} {...mockData} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

describe('<AddTaskModal />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call onClose function when cancel button is clicked', () => {
    const onCloseMock = jest.fn()
    const { getByText } = setup({
      onClose: onCloseMock
    })

    const cancelButton = getByText('Cancel')

    fireEvent.click(cancelButton)

    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should call applyFilters function when submit button is clicked', () => {
    const applyFiltersMock = jest.fn()
    const { getByText } = setup({
      applyFilters: applyFiltersMock
    })

    const submitButton = getByText('Filter tasks')

    fireEvent.click(submitButton)

    expect(applyFiltersMock).toHaveBeenCalled()
  })

  test('should call setFields function when some input is change', () => {
    const { getByPlaceholderText, getByDisplayValue } = setup()
    const input = getByPlaceholderText('Task title')

    fireEvent.change(input, {
      target: {
        value: 'my new title'
      }
    })

    const inputChanged = getByDisplayValue('my new title')

    expect(inputChanged).toBeInTheDocument()
  })
})
