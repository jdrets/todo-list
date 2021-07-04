import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import TextField from '.'
import theme from '../../utils/constants/theme'

const setup = (mockData = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <TextField
        placeholder="dummy placeholder"
        onChange={jest.fn()}
        label="dummy label"
        value="dummy value"
        fullWidth
        name="dummy name"
        required
        multiline
        {...mockData}
      />
    </ThemeProvider>
  )
}

describe('<TextField />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('component tag should be a input when multiline is null', () => {
    setup({
      multiline: null
    })

    const input = document.getElementsByTagName('input')[0]
    const textarea = document.getElementsByTagName('textarea')[0]

    expect(input).toBeInTheDocument()
    expect(textarea).toBeFalsy()
  })

  test('should call onChange function when input is change', () => {
    const onChangeMock = jest.fn()
    const { getByText } = setup({
      onChange: onChangeMock
    })
    const input = getByText('dummy value')

    fireEvent.change(input, {
      target: {
        value: 'new value'
      }
    })

    expect(onChangeMock).toHaveBeenCalled()
  })

  test('should render required label when required prop is true', () => {
    const { getByText } = setup({
      required: true
    })
    const requiredLabel = getByText('*')

    expect(requiredLabel).toBeInTheDocument()
  })

  test('should not render required labelasd when required prop is null', () => {
    const { queryByText } = setup({
      required: false
    })

    expect(queryByText('*')).toBeNull()
  })
})
