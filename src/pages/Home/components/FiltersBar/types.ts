import { SetStateAction } from 'react'
import { FilterFieldsTypes } from '../FiltersModal/components/Fields/types'

export interface FiltersBarTypes {
  filters?: FilterFieldsTypes
  setFilters: SetStateAction<any>
  openFilterModal: () => void
}
