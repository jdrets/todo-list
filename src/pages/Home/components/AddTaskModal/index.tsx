import React, { FunctionComponent, useContext } from 'react'

import { ModalType } from './types'
import { ButtonsWrapper } from './styles'

import TaskService from '../../../../services/taskService'
import SNACKBAR from '../../../../utils/constants/snackbar'
import Button from '../../../../components/Button'
import { PageContext } from '../../../../components/AppContextProvider'
import Modal from '../../../../components/Modal'
import Fields from './components/Fields'
import withFieldsModal from '../withFieldsModal'

export const AddTaskModal: FunctionComponent<ModalType> = ({
  open,
  showSnackbar,
  fields,
  handleChangeField,
  fetching,
  setFetching,
  isButtonDisabled,
  handleCancel
}) => {
  const { updateContextTasks } = useContext(PageContext)

  const handleConfirm = () => {
    try {
      setFetching(true)

      TaskService.create(fields as any)
      updateContextTasks()

      showSnackbar(SNACKBAR.TYPE.SUCCESS, SNACKBAR.MESSAGE.TASKS.SUCCESS.CREATED)
      handleCancel()
    } catch (error) {
      showSnackbar(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
    } finally {
      setFetching(false)
    }
  }

  return (
    <Modal
      title="Add new task"
      open={open}
      onClose={handleCancel}
    >
      <Fields fields={fields} handleChangeField={handleChangeField} />
      <ButtonsWrapper>
        <Button
          variant="white"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isButtonDisabled()}
        >
          {fetching ? 'Creating..' : 'Create'}
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default withFieldsModal(AddTaskModal)
