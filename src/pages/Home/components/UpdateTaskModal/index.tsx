import React, { FunctionComponent, useContext } from 'react'

import { ModalType } from './types'
import { ButtonsWrapper, FieldsWrapper } from './styles'

import TaskService from '../../../../services/taskService'
import SNACKBAR from '../../../../utils/constants/snackbar'
import Button from '../../../../components/Button'
import { PageContext } from '../../../../components/AppContextProvider'
import Modal from '../../../../components/Modal'
import Fields from './components/Fields'
import withFieldsModal from '../withFieldsModal'

export const UpdateTaskModal: FunctionComponent<ModalType> = ({
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

      TaskService.update(fields)
      updateContextTasks()

      showSnackbar(SNACKBAR.TYPE.SUCCESS, SNACKBAR.MESSAGE.TASKS.SUCCESS.UPDATE)
      handleCancel()
    } catch (error) {
      showSnackbar(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
    } finally {
      setFetching(false)
    }
  }

  const handleDelete = () => {
    try {
      setFetching(true)

      TaskService.delete(fields.id)
      updateContextTasks()

      showSnackbar(SNACKBAR.TYPE.SUCCESS, SNACKBAR.MESSAGE.TASKS.SUCCESS.DELETE)
      handleCancel()
    } catch (error) {
      showSnackbar(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
    } finally {
      setFetching(false)
    }
  }

  return (
    <Modal
      title={fields?.title}
      open={open}
      onClose={handleCancel}
    >
      <FieldsWrapper>
        <Fields fields={fields} handleChangeField={handleChangeField} />
      </FieldsWrapper>
      <ButtonsWrapper>
        <Button
          onClick={handleDelete}
          variant="red"
        >
          Delete
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={isButtonDisabled()}
        >
          {fetching ? 'Updating..' : 'Update'}
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default withFieldsModal(UpdateTaskModal)
