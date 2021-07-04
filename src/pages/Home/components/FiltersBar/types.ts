import { SetStateAction } from 'react'

export interface FiltersTypes {
  label: string
  onClose: () => void
  // TODO: add filters types
}

export interface FiltersBarTypes {
  filters?: any
  setFilters: SetStateAction<any>
  openFilterModal: () => void
}
