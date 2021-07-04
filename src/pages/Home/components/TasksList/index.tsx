import React, { FunctionComponent } from 'react'
import uuid from 'react-uuid'

import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'
import { Wrapper } from './styles'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks, setSelectedTask }) => (
  <Wrapper>
    {tasks.map(task => (
      <TaskCard
        key={uuid()}
        task={task}
        setSelectedTask={setSelectedTask}
      />
    ))}
  </Wrapper>
)

export default TasksList
