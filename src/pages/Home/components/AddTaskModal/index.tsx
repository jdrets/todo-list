import React, { FunctionComponent, useState } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper } from './styles'

import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import Fields from './components/Fields'

const AddTaskModal: FunctionComponent<AddTaskModalType> = ({
  open,
  onClose
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
    // TODO: add task
  }

  console.log(fields)

  return (
    <Modal
      title="Add new task"
      open={open}
      onClose={onClose}
    >
      <Fields handleChangeField={handleChangeField} />
      <ButtonsWrapper>
        <Button
          variant="white"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
        >
          Create
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default AddTaskModal
