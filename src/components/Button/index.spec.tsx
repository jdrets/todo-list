import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent, waitFor } from '@testing-library/react'

import Button from '.'
import theme from '../../utils/constants/theme'

const mock = {
  onClick: jest.fn()
}

const setup = (mockData = {}) => (
  render(
    <ThemeProvider theme={theme}>
      <Button {...mock} {...mockData}>
        Button
      </Button>
    </ThemeProvider>
  )
)

describe('<Button />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call onClick when button is clicked',() => {
    const onClickMock = jest.fn()
    const { getByText } = setup({
      onClick: onClickMock
    })
    const button = getByText('Button')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
  })
})
