import { TaskTypes } from './components/TaskCard/types'

export interface TasksListTypes {
  tasks: TaskTypes[],
  setSelectedTask: (task: TaskTypes) => void
  filters: any // TODO: upgrade this
}
