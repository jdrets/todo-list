import { SetStateAction } from 'react'
import { TaskTypes } from '../../../TasksList/components/TaskCard/types'

export interface FieldsTypes {
  handleChangeField: SetStateAction<any>
  fields: TaskTypes
}
