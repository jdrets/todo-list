import React, { FunctionComponent } from 'react'

import {
  Wrapper,
  Title,
  Description
} from './styles'
import { TaskCardTypes } from './types'
import List from './components/List'

const TaskCard: FunctionComponent<TaskCardTypes> = ({
  task,
  setSelectedTask,
  isDragging
}) => {
  const handleClick = () => {
    setSelectedTask(task)
  }

  return (
    <Wrapper onClick={handleClick} isDragging={isDragging}>
      <List status={task.status} priority={task.priority} dueDate={task.dueDate} />
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
    </Wrapper>
  )
}

export default TaskCard
