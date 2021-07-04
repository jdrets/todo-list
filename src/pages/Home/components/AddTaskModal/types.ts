export interface AddTaskModalType {
  open: boolean
  onClose: () => void
  showSnackbar: (type: string, message: string) => void
}
