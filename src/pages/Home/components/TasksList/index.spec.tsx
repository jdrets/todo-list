import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render, waitFor } from '@testing-library/react'

import TasksList from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}, mockContext = {}) => {
  const mock = {
    tasks: [
      {
        id: 1,
        orderId: 1,
        title: 'dummy title',
        description: 'dummy description',
        status: 'dummy status',
        priority: 'dummy priority'
      },
      {
        id: 2,
        orderId: 2,
        title: 'dummy title 2',
        description: 'dummy description',
        status: 'dummy status',
        priority: 'dummy priority'
      }
    ],
    setSelectedTask: jest.fn(),
    filters: null
  }
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider {...mockContext}>
        <TasksList {...mock} {...mockData} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

describe('<TasksList />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should match with snapshot with filters', () => {
    const { container } = setup({
      filters: {
        title: 'dummy title'
      }
    })

    expect(container).toMatchSnapshot()
  })

  test('should call updateContextTasks when drag and switch cards', async () => {
    const updateTasksMock = jest.fn()
    const mockContext = {
      value: {
        updateContextTasks: updateTasksMock
      }
    }
    const { getByTestId } = setup({}, mockContext)
    const card = getByTestId('draggable-card-1')
    const dropZone = getByTestId('droppable-zone')

    fireEvent.mouseDown(card)
    fireEvent.mouseMove(dropZone, {
      clientX: 12,
      clientY: 12
    })

    fireEvent.mouseUp(card)

    await waitFor(() => {
      expect(updateTasksMock).toHaveBeenCalled()
    })
  })
})
