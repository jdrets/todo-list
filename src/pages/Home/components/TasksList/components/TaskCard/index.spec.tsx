import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import TaskCard from './index'
import theme from '../../../../../../utils/constants/theme'
import AppContextProvider from '../../../../../../components/AppContextProvider'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <TaskCard
          task={{
            status: 'dummy status',
            priority: 'dummy priority',
            dueDate: 'dummy dueDate',
            description: 'dummy description',
            title: 'dummy title'
          }}
          setSelectedTask={jest.fn()}
        />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<TaskCard />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })
})
