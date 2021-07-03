import styled from 'styled-components'

import getBackgroundColor from '../../utils/functions/getBackgroundColor'
import getColor from '../../utils/functions/getColor'
import { ButtonTypes } from './types'

export const ButtonWrapper = styled.div<ButtonTypes>`
  background-color: ${props => getBackgroundColor(props.variant)};
  border-radius: 24px;
  color: ${props => getColor(props.variant)};
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  padding: 10px 24px;
  transition: 0.3s;
  
  &:hover {
    opacity: .8;
    transition: 0.3s;
  }
`
