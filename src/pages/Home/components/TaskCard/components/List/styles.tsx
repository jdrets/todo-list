import styled from 'styled-components'

import { TaskPriorityValueTypes, TaskStatusValueTypes } from './types'
import theme from '../../../../../../utils/constants/theme'
import TASK_CONSTANTS from '../../../../../../utils/constants/task'

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

const getPriorityColor = (priority) => {
  if (priority === TASK_CONSTANTS.PRIORITY.HIGH) {
    return theme.colors.red
  } else if (priority === TASK_CONSTANTS.PRIORITY.LOW) {
    return theme.colors.green
  } else if (priority === TASK_CONSTANTS.PRIORITY.MEDIUM) {
    return theme.colors.yellow
  } else {
    return theme.colors.primaryColor
  }
}

export const PriorityValue = styled.span<TaskPriorityValueTypes>`
  color: ${props => getPriorityColor(props.priority)};
  font-weight: 700;
`

const getStatusColor = (status) => {
  if (status === TASK_CONSTANTS.STATUS.TODO) {
    return theme.colors.primaryColor
  } else if (status === TASK_CONSTANTS.STATUS.DOING) {
    return theme.colors.yellow
  } else if (status === TASK_CONSTANTS.STATUS.DONE) {
    return theme.colors.green
  } else {
    return theme.colors.primaryColor
  }
}

export const StatusValue = styled.span<TaskStatusValueTypes>`
  color: ${props => getStatusColor(props.status)};
  font-weight: 700;
`

export const DueDateValue = styled.span`
  color: ${theme.colors.primaryColor};
  font-weight: 700;
`
