import { TaskTypes } from '../TasksList/components/TaskCard/types'
import { FilterFieldsTypes } from './components/Fields/types'

export interface ModalType {
  open: boolean
  onClose: () => void
  applyFilters: (fields: FilterFieldsTypes) => void
  filters?: TaskTypes
}
