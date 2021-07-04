import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import AddTaskModal from '.'
import theme from '../../../../utils/constants/theme'
import AppContextProvider from '../../../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    open: true,
    onClose: jest.fn(),
    showSnackbar: jest.fn()
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
})
