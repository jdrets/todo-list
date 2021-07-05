import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import HomePage from '.'
import TASK_CONSTANTS from '../../utils/constants/task'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../../components/AppContextProvider'

const setup = (mockContext = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...mockContext}>
        <HomePage />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<HomePage />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should match with snapshot with tasks', () => {
    const mockContext = {
      value: {
        tasks: [
          {
            title: 'dummy title',
            description: 'dummy title',
            status: TASK_CONSTANTS.STATUS.DONE,
            priority: TASK_CONSTANTS.PRIORITY.HIGH
          },
          {
            title: 'dummy title 2',
            description: 'dummy title 2',
            status: TASK_CONSTANTS.STATUS.DONE,
            priority: TASK_CONSTANTS.PRIORITY.HIGH
          }
        ]
      }
    }
    const { container } = setup(mockContext)

    expect(container).toMatchSnapshot()
  })

  test('should open and close filters modal when button filter is clicked', () => {
    const contextMock = {
      value: {
        tasks: [{
          id: 1,
          status: 'dummy status',
          priority: 'dummy priority',
          dueDate: 'dummy dueDate',
          description: 'dummy description',
          title: 'dummy title'
        }]
      }
    }
    const { getByText, getByTestId } = setup(contextMock)

    const filtersButton = getByTestId('open-filters-modal-button')

    fireEvent.click(filtersButton)

    const applyButtonFilterModal = getByText('Filter tasks')

    expect(applyButtonFilterModal).toBeInTheDocument()

    fireEvent.click(applyButtonFilterModal)

    expect(applyButtonFilterModal).not.toBeInTheDocument()
  })

  test('should open and close new task modal when add button is clicked and close button is clicked', () => {
    const { getByText } = setup()
    const createTaskButtonEmptyState = getByText('Create task')

    fireEvent.click(createTaskButtonEmptyState)

    const createTaskButtonModal = getByText('Create')
    const cancelButton = getByText('Cancel')

    expect(createTaskButtonModal).toBeInTheDocument()

    fireEvent.click(cancelButton)

    expect(cancelButton).not.toBeInTheDocument()
  })

  test('should open and close update task modal when toggle buttons', () => {
    const contextMock = {
      value: {
        tasks: [{
          id: 1,
          status: 'dummy status',
          priority: 'dummy priority',
          dueDate: 'dummy dueDate',
          description: 'dummy description',
          title: 'dummy title'
        }]
      }
    }
    const { getByText } = setup(contextMock)
    const taskCard = getByText('dummy title')

    fireEvent.click(taskCard)

    const updateTaskButtonModal = getByText('Update')
    const deleteTaskButtonModal = getByText('Delete')

    expect(updateTaskButtonModal).toBeInTheDocument()

    fireEvent.click(deleteTaskButtonModal)

    expect(deleteTaskButtonModal).not.toBeInTheDocument()
  })
})
