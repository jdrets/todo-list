import React, { FunctionComponent } from 'react'

import Select from '../../../../../../components/Select'
import TASK_CONSTANTS from '../../../../../../utils/constants/task'
import TextField from '../../../../../../components/TextField'
import { FieldsWrapper } from './styles'
import { FieldsTypes } from './types'

const Fields: FunctionComponent<FieldsTypes> = ({ handleChangeField, fields }) => (
  <FieldsWrapper>
    <TextField
      label="Title"
      name="title"
      placeholder="Task title"
      onChange={handleChangeField}
      value={fields?.title}
      fullWidth
    />
    <Select
      label="By status"
      name="status"
      placeholder="Task status"
      onChange={handleChangeField}
      value={fields?.status}
      fullWidth
    >
      <option>Select task status</option>
      <option value={TASK_CONSTANTS.STATUS.TODO}>{TASK_CONSTANTS.STATUS.TODO}</option>
      <option value={TASK_CONSTANTS.STATUS.DOING}>{TASK_CONSTANTS.STATUS.DOING}</option>
      <option value={TASK_CONSTANTS.STATUS.DONE}>{TASK_CONSTANTS.STATUS.DONE}</option>
    </Select>
    <Select
      label="By priority"
      name="priority"
      placeholder="Task priority"
      onChange={handleChangeField}
      value={fields?.priority}
      fullWidth
    >
      <option>Select task priority</option>
      <option value={TASK_CONSTANTS.PRIORITY.LOW}>{TASK_CONSTANTS.PRIORITY.LOW}</option>
      <option value={TASK_CONSTANTS.PRIORITY.MEDIUM}>{TASK_CONSTANTS.PRIORITY.MEDIUM}</option>
      <option value={TASK_CONSTANTS.PRIORITY.HIGH}>{TASK_CONSTANTS.PRIORITY.HIGH}</option>
    </Select>
    <TextField
      label="Until due date"
      name="dueDate"
      placeholder="Due date"
      onChange={handleChangeField}
      value={fields?.dueDate}
      fullWidth
      type="date"
    />
  </FieldsWrapper>
)

export default Fields
