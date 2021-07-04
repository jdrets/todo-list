import React, { FunctionComponent } from 'react'

import {
  Wrapper,
  Input,
  Label,
  RequiredLabel
} from './styles'
import { TextFieldTypes } from './types'

const TextField: FunctionComponent<TextFieldTypes> = ({
  placeholder,
  onChange,
  label,
  value,
  fullWidth,
  name,
  required,
  multiline
}) => (
  <Wrapper>
    <Label>
      {label} {required && <RequiredLabel>*</RequiredLabel>}
    </Label>
    <Input
      as={multiline ? 'textarea' : 'input'}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
      multiline={multiline}
      name={name}
      required
    />
  </Wrapper>
)

export default TextField
