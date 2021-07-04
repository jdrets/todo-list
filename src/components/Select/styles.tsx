import styled from 'styled-components'

import theme from '../../utils/constants/theme'
import { SelectWrapperTypes } from './types'

export const Wrapper = styled.div`
  display: block;
`

export const SelectFieldWrapper = styled.div<SelectWrapperTypes>`
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${theme.colors.grayLight};
  display: flex;
  justify-content: space-between;
  position: relative;
  resize: none;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    border-color: ${theme.colors.primaryColorLight};
  }
  
  &:focus {
    border-color: ${theme.colors.primaryColor};
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
  
  svg {
    color: ${theme.colors.grayLight};
    height: auto;
  }
`

export const SelectField = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 12px;
  position: relative;
  width: 100%;
  z-index: 2;
`

export const Label = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 300;
`

export const RequiredLabel = styled.span`
  color: ${theme.colors.red};
`
