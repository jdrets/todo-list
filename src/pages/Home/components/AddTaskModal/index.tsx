import React, { FunctionComponent } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper } from './styles'
import Button from '../../../../components/Button'

import Modal from '../../../../components/Modal'

const AddTaskModal: FunctionComponent<AddTaskModalType> = ({
  open,
  onClose
}) => {
  return (
    <Modal
      title="Add new task"
      open={open}
      onClose={onClose}
    >
      asd

      <ButtonsWrapper>
        <Button>
          Cancel
        </Button>
        <Button>
          Create
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default AddTaskModal
