import React from 'react'
import { ThemeProvider } from 'styled-components'

import { fireEvent, render } from '@testing-library/react'

import NotFoundPage from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../../components/AppContextProvider'

const setup = () => (
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <NotFoundPage />
      </AppContextProvider>
    </ThemeProvider>
  )
)

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

describe('<NotFoundPage />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call push history function when button is clicked', () => {
    const { getByText } = setup()
    const button = getByText('Go to home')

    fireEvent.click(button)

    expect(mockHistoryPush).toHaveBeenCalled()
  })
})
