import React, { FunctionComponent } from 'react'

import { ButtonTypes } from './types'
import {
  ButtonWrapper
} from './styles'

const Button: FunctionComponent<ButtonTypes> = ({
  children,
  variant,
  onClick,
  disabled
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
