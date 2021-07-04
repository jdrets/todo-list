import React, { FunctionComponent } from 'react'
import _ from 'lodash'
import uuid from 'react-uuid'

import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'
import { Wrapper } from './styles'
import TaskService from '../../../../services/taskService'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks, setSelectedTask, filters }) => {
  const filterTasks = () => TaskService.filter(filters)
  const currentTasks = filters ? filterTasks() : tasks

  return (
    <Wrapper>
      {currentTasks.map(task => (
        <TaskCard
          key={uuid()}
          task={task}
          setSelectedTask={setSelectedTask}
        />
      ))}
    </Wrapper>
  )
}

export default TasksList
