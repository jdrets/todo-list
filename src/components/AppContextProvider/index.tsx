import React, { FunctionComponent, useState, createContext, useEffect } from 'react'
import _ from 'lodash'

import { AppContextProviderTypes } from './types'

export const PageContext = createContext({} as AppContextProviderTypes)

const AppContextProvider: FunctionComponent<any> = ({ children, value = {} }) => {
  const [tasks, setTasks] = useState([])
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const storage = JSON.parse(localStorage.getItem('tasks')) || []

  useEffect(() => {
    setTasks(storage)
  }, [])

  const updateContextWithNewTask = (task) => {
    const newTasks = _.clone(tasks)
    newTasks.push(task)
    setTasks(newTasks)
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
