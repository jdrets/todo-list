import { TaskTypes } from './components/TaskCard/types'
import { FilterFieldsTypes } from '../FiltersModal/components/Fields/types'

export interface TasksListTypes {
  tasks: TaskTypes[],
  setSelectedTask: (task: TaskTypes) => void
  filters: FilterFieldsTypes
}
