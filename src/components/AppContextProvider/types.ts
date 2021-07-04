import React from 'react'

export interface TasksTypes {
  status: string
  priority: string
  dueDate?: string
  title: string
  description: string
}

export interface AppContextProviderTypes {
  tasks: TasksTypes[]
  setTasks: React.SetStateAction<any>
  newTaskModal: boolean
  setNewTaskModal: React.SetStateAction<any>
}
