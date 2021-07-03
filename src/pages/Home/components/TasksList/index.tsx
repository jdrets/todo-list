import React, { FunctionComponent } from 'react'
import uuid from 'react-uuid'

import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks }) => (
  <>
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
  </>
)

export default TasksList
