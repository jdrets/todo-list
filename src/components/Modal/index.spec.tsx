import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render, fireEvent } from '@testing-library/react'

import Modal from '.'
import theme from '../../utils/constants/theme'

const setup = (mockData = {}) => {
  const mock = {
    onClose: jest.fn(),
    title: 'dummy title',
    open: true
  }
  return render(
    <ThemeProvider theme={theme}>
      <Modal {...mock} {...mockData}>
        Modal content
      </Modal>
    </ThemeProvider>
  )
}

describe('<Modal />', () => {
  test('should match with snapshot', () => {
    const { container } = setup()

    expect(container).toMatchSnapshot()
  })

  test('should close modal when press Escape key and modal is open', () => {
    const onCloseMock = jest.fn()
    setup({
      open: true,
      onClose: onCloseMock
    })

    fireEvent.keyDown(document, {
      key: 'Escape'
    })

    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should not close modal when press Escape key and modal is not open', () => {
    const onCloseMock = jest.fn()
    setup({
      open: false,
      onClose: onCloseMock
    })

    fireEvent.keyDown(document, {
      key: 'Escape'
    })

    expect(onCloseMock).toHaveBeenCalledTimes(0)
  })

  test('should not render when open prop is false', () => {
    const mockData = {
      open: false
    }
    setup(mockData)
    const button = document.getElementsByTagName('button')[0]

    expect(button).toBeFalsy()
  })

  test('should call onClose function when close button is clicked', () => {
    const mockOnClose = jest.fn()
    const mockData = {
      onClose: mockOnClose
    }
    const { getByTestId } = setup(mockData)
    const button = getByTestId('modal-close-button')

    fireEvent.click(button)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
