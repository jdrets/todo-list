import styled from 'styled-components'

import theme from '../../../../../../utils/constants/theme'

import getStatusColor from '../../../../../../utils/functions/getStatusColor'
import getPriorityColor from '../../../../../../utils/functions/getPriorityColor'

import { TaskPriorityValueTypes, TaskStatusValueTypes } from './types'

export const WrapperList = styled.div`
  display: flex;
  color: ${theme.colors.gray};
`

export const Item = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
  margin-right: 10px;
  
  @media(min-width: ${theme.layout.breakpoints.medium}) {
    font-size: 12px;
    margin-right: 18px;
  }
`

export const ItemIconWrapper = styled.div`
  margin-left: -3px;
  
  svg {
    height: 16px;
    width: auto;
    fill: ${theme.colors.gray}
  }
`

export const ItemLabel = styled.div`
  margin-left: 2px;
`

export const PriorityValue = styled.span<TaskPriorityValueTypes>`
  color: ${props => getPriorityColor(props.priority)};
  font-weight: 700;
`

export const StatusValue = styled.span<TaskStatusValueTypes>`
  color: ${props => getStatusColor(props.status)};
  font-weight: 700;
`

export const DueDateValue = styled.span`
  color: ${theme.colors.primaryColor};
  font-weight: 700;
`
