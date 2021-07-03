import styled from 'styled-components'

import getBackgroundColor from '../../utils/functions/getBackgroundColor'
import getColor from '../../utils/functions/getColor'
import { ButtonTypes } from './types'

export const ButtonWrapper = styled.div<ButtonTypes>`
  background-color: ${props => getBackgroundColor(props.variant)};
  border-radius: 24px;
  color: ${props => getColor(props.variant)};
  display: inline-block;
  font-weight: 700;
  padding: 12px 24px;
`
