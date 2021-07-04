import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import { AddTaskModal } from '.'
import theme from '../../../../utils/constants/theme'
import TASK_CONSTANTS from '../../../../utils/constants/task'
import SNACKBAR from '../../../../utils/constants/snackbar'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    open: true,
    onClose: jest.fn(),
    showSnackbar: jest.fn(),
    fields: null,
    handleChangeField: jest.fn(),
    fetching: false,
    setFetching: jest.fn(),
    isButtonDisabled: jest.fn(),
    handleCancel: jest.fn()
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

  test('should fail to create task and call showSnackbar function', () => {
    const showSnackbarMock = jest.fn()
    const mockData = {
      fields: null,
      showSnackbar: showSnackbarMock
    }
    const { getByText } = setup(mockData)
    const submitButton = getByText('Create')

    fireEvent.click(submitButton)

    expect(showSnackbarMock).toHaveBeenCalledWith(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
  })

  test('should create task correctly and call showSnackbar function', () => {
    const showSnackbarMock = jest.fn()
    const mockData = {
      fields: {
        title: 'dummy title',
        description: 'dummy title',
        status: TASK_CONSTANTS.STATUS.DONE,
        priority: TASK_CONSTANTS.PRIORITY.HIGH
      },
      showSnackbar: showSnackbarMock
    }
    const { getByText } = setup(mockData)
    const submitButton = getByText('Create')

    fireEvent.click(submitButton)

    expect(showSnackbarMock).toHaveBeenCalledWith(SNACKBAR.TYPE.SUCCESS, SNACKBAR.MESSAGE.TASKS.SUCCESS.CREATED)
  })

  test('should text button change when fetching is true', () => {
    const mockData = {
      fetching: true
    }
    const { getByText } = setup(mockData)
    const submitButton = getByText('Creating..')

    expect(submitButton).toBeInTheDocument()
  })
})
