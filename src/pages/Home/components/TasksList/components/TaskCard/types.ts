export interface TaskTypes {
  id?: number,
  status: string,
  priority: string,
  title: string,
  description: string
  dueDate?: string
}

export interface TaskCardTypes {
  task: TaskTypes,
  setSelectedTask: (task: TaskTypes) => void
}
