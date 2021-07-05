import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import TasksList from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    tasks: [
      {
        title: 'dummy title',
        description: 'dummy description',
        status: 'dummy status',
        priority: 'dummy priority'
      },
      {
        title: 'dummy title',
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
      <AppContextProvider>
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
})
