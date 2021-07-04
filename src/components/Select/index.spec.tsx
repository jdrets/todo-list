import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Select from '.'
import theme from '../../utils/constants/theme'

const setup = (mockData = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <Select
        placeholder="dummy placeholder"
        onChange={jest.fn()}
        label="dummy label"
        value="dummy value"
        fullWidth
        name="dummy name"
        required
        {...mockData}
      >
        <option value="dummy value">dummy option</option>
      </Select>
    </ThemeProvider>
  )
}

describe('<Select />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should call onChange function when select is change', () => {
    const onChangeMock = jest.fn()
    const { queryByPlaceholderText } = setup({
      onChange: onChangeMock
    })
    const input = queryByPlaceholderText('dummy placeholder')

    fireEvent.change(input, {
      target: {
        value: 'new value'
      }
    })

    expect(onChangeMock).toHaveBeenCalled()
  })

  test('should render required label when required prop is true in select', () => {
    const { getByText } = setup({
      required: true
    })
    const requiredLabel = getByText('*')

    expect(requiredLabel).toBeInTheDocument()
  })

  test('should not render required labelasd when required prop is null in select', () => {
    const { queryByText } = setup({
      required: false
    })

    expect(queryByText('*')).toBeNull()
  })
})
