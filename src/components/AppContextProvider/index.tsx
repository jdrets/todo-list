import React, { FunctionComponent, useState, createContext, useEffect } from 'react'
import _ from 'lodash'

import TaskService from '../../services/taskService'
import { AppContextProviderTypes } from './types'

export const PageContext = createContext({} as AppContextProviderTypes)

const AppContextProvider: FunctionComponent<any> = ({ children, value = {} }) => {
  const [tasks, setTasks] = useState([])
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)

  useEffect(() => {
    const storage = TaskService.get()
    setTasks(storage)
  }, [])

  const updateContextWithNewTask = (task) => {
    const newTasks = _.clone(tasks)
    newTasks.push(task)
    setTasks(_.reverse(newTasks))
  }

  const contextValues = {
    tasks,
    showCreateTaskModal,
    updateContextWithNewTask,
    setShowCreateTaskModal,
    ...value
  }

  return (
    <PageContext.Provider value={contextValues}>{children}</PageContext.Provider>
  )
}

export default AppContextProvider
