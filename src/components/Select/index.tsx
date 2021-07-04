import React, { FunctionComponent } from 'react'
import { ChevronDown } from 'react-ionicons'

import {
  Wrapper,
  SelectField,
  Label,
  RequiredLabel,
  SelectFieldWrapper,
  IconWrapper
} from './styles'
import { SelectTypes } from './types'

const Select: FunctionComponent<SelectTypes> = ({
  placeholder,
  onChange,
  label,
  value,
  fullWidth,
  name,
  required,
  children
}) => (
  <Wrapper>
    <Label>
      {label} {required && <RequiredLabel>*</RequiredLabel>}
    </Label>
    <SelectFieldWrapper>
      <SelectField
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth={fullWidth}
        name={name}
        required
      >
        {children}
      </SelectField>
      <IconWrapper>
        <ChevronDown />
      </IconWrapper>
    </SelectFieldWrapper>
  </Wrapper>
)

export default Select
