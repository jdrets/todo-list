import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import FeedbackState from '.'
import theme from '../../utils/constants/theme'
import AppContextProvider from '../../components/AppContextProvider'

const setup = (mockData = {}) => {
  const mock = {
    illustration: <div>dummy illustration</div>,
    title: 'dummy title',
    button: <button>dummy button</button>
  }
  return render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <FeedbackState {...mock} {...mockData} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

describe('<FeedbackState />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should not render button when button prop is null', () => {
    const mockData = {
      button: null
    }
    setup(mockData)

    const button = document.getElementsByTagName('button')[0]

    expect(button).toBeFalsy()
  })
})
