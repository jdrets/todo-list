import React, { FunctionComponent, useState, createContext, useEffect } from 'react'

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

  const updateContextTasks = () => {
    const updatedTask = TaskService.get()

    setTasks(updatedTask)
  }

  const contextValues = {
    tasks,
    showCreateTaskModal,
    updateContextTasks,
    setShowCreateTaskModal,
    ...value
  }

  return (
    <PageContext.Provider value={contextValues}>{children}</PageContext.Provider>
  )
}

export default AppContextProvider
