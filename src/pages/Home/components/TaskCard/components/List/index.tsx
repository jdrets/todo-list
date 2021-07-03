import React, { FunctionComponent } from 'react'
import { ThermometerOutline, Flame, CalendarOutline } from 'react-ionicons'

import { ListTypes } from './types'
import {
  WrapperList,
  Item,
  ItemIconWrapper,
  ItemLabel,
  PriorityValue,
  StatusValue,
  DueDateValue
} from './styles'

const TaskCard: FunctionComponent<ListTypes> = ({ status, priority, dueDate }) => {
  return (
    <WrapperList>
      <Item>
        <ItemIconWrapper>
          <ThermometerOutline />
        </ItemIconWrapper>
        <ItemLabel>
          Priority: <PriorityValue priority={priority}>{priority}</PriorityValue>
        </ItemLabel>
      </Item>
      <Item>
        <ItemIconWrapper>
          <Flame />
        </ItemIconWrapper>
        <ItemLabel>
          Status: <StatusValue status={status}>{status}</StatusValue>
        </ItemLabel>
      </Item>
      {
        dueDate && (
          <Item>
            <ItemIconWrapper>
              <CalendarOutline />
            </ItemIconWrapper>
            <ItemLabel>Due date: <DueDateValue>{dueDate}</DueDateValue></ItemLabel>
          </Item>
        )
      }
    </WrapperList>
  )
}

export default TaskCard
