import styled from 'styled-components'

import theme from '../../utils/constants/theme'
import { TextFieldTypes } from './types'

export const Wrapper = styled.div`
  display: block;
`

export const Input = styled.input<TextFieldTypes>`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${theme.colors.grayLight};
  height: ${props => props.multiline && '150px'};
  outline: none;
  padding: 12px;
  resize: none;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    border-color: ${theme.colors.primaryColorLight};
  }
  
  &:focus {
    border-color: ${theme.colors.primaryColor};
  }
  
  &::-webkit-calendar-picker-indicator {
    opacity: 0.2;
    padding: 0;
  }
`

export const Label = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 300;
`

export const RequiredLabel = styled.span`
  color: ${theme.colors.red};
`
