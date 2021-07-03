import React, { FunctionComponent } from 'react'

import {
  Wrapper,
  Title,
  Description
} from './styles'
import { TaskTypes } from './types'
import List from './components/List'

const TaskCard: FunctionComponent<TaskTypes> = ({ title, description, status, priority, dueDate }) => {
  return (
    <Wrapper>
      <List status={status} priority={priority} dueDate={dueDate} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default TaskCard
