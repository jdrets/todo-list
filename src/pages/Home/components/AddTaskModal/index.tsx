import React, { FunctionComponent, useState, useContext } from 'react'

import { AddTaskModalType } from './types'
import { ButtonsWrapper } from './styles'

import TaskService from '../../../../services/taskService'
import SNACKBAR from '../../../../utils/constants/snackbar'
import Button from '../../../../components/Button'
import { PageContext } from '../../../../components/AppContextProvider'
import Modal from '../../../../components/Modal'
import Fields from './components/Fields'

const AddTaskModal: FunctionComponent<AddTaskModalType> = ({
  open,
  onClose,
  showSnackbar
}) => {
  const { updateContextWithNewTask } = useContext(PageContext)

  const [fetching, setFetching] = useState(false)
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

  const handleCancel = () => {
    setFields(null)
    onClose()
  }

  const handleConfirm = () => {
    try {
      setFetching(true)

      TaskService.create(fields)
      updateContextWithNewTask(fields)

      showSnackbar(SNACKBAR.TYPE.SUCCESS, SNACKBAR.MESSAGE.TASKS.SUCCESS.CREATED)
      handleCancel()
    } catch (error) {
      console.log(error)

      showSnackbar(SNACKBAR.TYPE.ERROR, SNACKBAR.MESSAGE.ERROR)
    } finally {
      setFetching(false)
    }
  }

  const isButtonDisabled = () => {
    return !fields?.status || !fields?.priority || !fields?.description || !fields?.title || fetching
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

export default AddTaskModal
