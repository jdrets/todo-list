import React, { FunctionComponent, useState, createContext } from 'react'

import { AppContextProviderTypes } from './types'

export const PageContext = createContext({} as AppContextProviderTypes)

const AppContextProvider: FunctionComponent<any> = ({ children, value = {} }) => {
  const [tasks, setTasks] = useState([])
  const [newTaskModal, setNewTaskModal] = useState(false)
  const contextValues = {
    tasks,
    setTasks,
    newTaskModal,
    setNewTaskModal,
    ...value,
  }

  return (
    <PageContext.Provider value={contextValues}>{children}</PageContext.Provider>
  )
}

export default AppContextProvider
