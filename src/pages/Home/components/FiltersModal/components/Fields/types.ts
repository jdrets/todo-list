import { SetStateAction } from 'react'

export interface FilterFieldsTypes {
  title?: string
  dueDate?: string
  status?: string
  priority?: string
}

export interface FieldsTypes {
  handleChangeField: SetStateAction<any>
  fields?: FilterFieldsTypes
}
