import React, { FunctionComponent } from 'react'
import uuid from 'react-uuid'

import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'
import { Wrapper } from './styles'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks }) => (
  <Wrapper>
    {tasks.map(task => (
      <TaskCard
        key={uuid()}
        title={task.title}
        description={task.description}
        status={task.status}
        priority={task.priority}
        dueDate={task.dueDate}
      />
    ))}
  </Wrapper>
)

export default TasksList
