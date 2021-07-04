import { TaskTypes } from '../TasksList/components/TaskCard/types'

export interface ModalType {
  open: boolean
  onClose: () => void
  showSnackbar: (type: string, message: string) => void
  fields: TaskTypes
  handleChangeField: () => void
  fetching: boolean
  setFetching: (state: boolean) => void
  isButtonDisabled: () => boolean
  handleCancel: () => void
}
