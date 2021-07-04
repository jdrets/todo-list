import React, { FunctionComponent } from 'react'
import uuid from 'react-uuid'

import FilterEmptyState from '../../components/FilterEmptyState'
import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'
import { Wrapper } from './styles'
import TaskService from '../../../../services/taskService'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks, setSelectedTask, filters }) => {
  const filterTasks = () => TaskService.filter(filters)
  const currentTasks = filters ? filterTasks() : tasks

  return (
    currentTasks.length > 0
      ? <Wrapper>
          {currentTasks.map(task => (
            <TaskCard
              key={uuid()}
              task={task}
              setSelectedTask={setSelectedTask}
            />
          ))}
        </Wrapper>
      : <FilterEmptyState />
  )
}

export default TasksList
