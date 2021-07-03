import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import List from './index'
import theme from '../../../../../../../../utils/constants/theme'
import AppContextProvider from '../../../../../../../../components/AppContextProvider'

const setup = (mockData = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <List
          status='dummy status'
          priority='dummy priority'
          dueDate='dummy due date'
          {...mockData}
        />
      </AppContextProvider>
    </ThemeProvider>
  )
)

describe('<List />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should not render due date if prop is null', () => {
    const mockData = {
      dueDate: null
    }
    setup(mockData)
    const dueDate = document.querySelector('[data-testid="card-due-date"]')

    expect(dueDate).toBeFalsy()
  })

  test('should render due date if prop is provided', () => {
    const { getByTestId } = setup()
    const dueDate = getByTestId('card-due-date')

    expect(dueDate).toBeInTheDocument()
  })
})
