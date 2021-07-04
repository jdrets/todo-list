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
  updateContextTasks: () => void
  showCreateTaskModal: boolean
  setShowCreateTaskModal: React.SetStateAction<any>
}
