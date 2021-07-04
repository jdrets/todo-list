import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

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
})
