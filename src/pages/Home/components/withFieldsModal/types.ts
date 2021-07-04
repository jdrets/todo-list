import { TaskTypes } from '../TasksList/components/TaskCard/types'

export interface withFieldsModalTypes {
  open: boolean
  onClose: () => void
  showSnackbar: (type: string, message: string) => void
  selectedTask?: TaskTypes
}
