import React, { FunctionComponent, useState, createContext } from 'react'

import { AppContextProviderTypes } from './types'

export const PageContext = createContext({} as AppContextProviderTypes)

const AppContextProvider: FunctionComponent = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const contextValues = {
    tasks,
    setTasks
  }

  return (
    <PageContext.Provider value={contextValues}>{children}</PageContext.Provider>
  )
}

export default AppContextProvider
