import React, { FunctionComponent } from 'react'

import { ButtonTypes } from './types'
import {
  ButtonWrapper
} from './styles'

const Button: FunctionComponent<ButtonTypes> = ({
  children,
  variant,
  onClick
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
