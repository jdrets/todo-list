import React, { FunctionComponent } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper } from './styles'
import Button from '../../../../components/Button'

import Modal from '../../../../components/Modal'

const AddTaskModal: FunctionComponent<AddTaskModalType> = ({
  open,
  onClose
}) => {
  const handleConfirm = () => {
    // TODO: add task
  }

  return (
    <Modal
      title="Add new task"
      open={open}
      onClose={onClose}
    >
      asd
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
