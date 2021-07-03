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
          status='dummy status'
          priority='dummy priority'
          title='dummy title'
          description='dummy description'
          dueDate='dummy due date'
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
