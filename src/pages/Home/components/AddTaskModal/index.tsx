import React, { FunctionComponent, useState } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper } from './styles'

import TaskService from '../../../../services/taskService'
import SNACKBAR from '../../../../utils/constants/snackbar'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import Fields from './components/Fields'

const AddTaskModal: FunctionComponent<AddTaskModalType> = ({
  open,
  onClose,
  showSnackbar
}) => {
  const [fields, setFields] = useState({
    title: null,
    status: null,
    priority: null,
    description: null,
    dueDate: null
  })

  const handleChangeField = ({ target: { value, name } }) => {
    setFields({
      ...fields,
      [name]: value
    })
  }

  const handleConfirm = () => {
    try {
      TaskService.create(fields)
    } catch (error) {
      console.log(error)

      showSnackbar(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
    }
  }

  const handleCancel = () => {
    setFields(null)
    onClose()
  }

  const isButtonDisabled = () => {
    return !fields.status || !fields.priority || !fields.description || !fields.title
  }

  return (
    <Modal
      title="Add new task"
      open={open}
      onClose={handleCancel}
    >
      <Fields handleChangeField={handleChangeField} />
      <ButtonsWrapper>
        <Button
          variant="white"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          // disabled={isButtonDisabled()}
        >
          Create
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default AddTaskModal
