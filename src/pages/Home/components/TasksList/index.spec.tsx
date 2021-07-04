import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import TasksList from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = () => {
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
    setSelectedTask: jest.fn()
  }
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <TasksList {...mock} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

describe('<TasksList />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
