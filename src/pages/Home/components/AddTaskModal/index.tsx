import React, { FunctionComponent } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper, FieldsWrapper } from './styles'

import Button from '../../../../components/Button'
import TextField from '../../../../components/TextField'
import Select from '../../../../components/Select'
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
      <FieldsWrapper>
        <Select
          label="Status"
          name="status"
          placeholder="Task status"
          onChange={() => true}
          fullWidth
          required
        >
          <option value="hola">hola</option>
        </Select>
        <TextField
          label="Priority"
          name="priority"
          placeholder="Task priority"
          onChange={() => true}
          fullWidth
          required
        />
        <TextField
          label="Title"
          name="title"
          placeholder="Task title"
          onChange={() => true}
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="description"
          placeholder="Task description"
          onChange={() => true}
          fullWidth
          multiline
          required
        />
      </FieldsWrapper>

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
