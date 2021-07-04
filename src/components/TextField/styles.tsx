import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.div`
  display: block;
`

export const Input = styled.input<any>`
  border-radius: 4px;
  border: 1px solid ${theme.colors.grayLight};
  outline: none;
  padding: 12px;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  resize: none;
  height: ${props => props.multiline && '150px'};
  
  &:hover {
    border-color: ${theme.colors.primaryColorLight};
  }
  
  &:focus {
    border-color: ${theme.colors.primaryColor};
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
