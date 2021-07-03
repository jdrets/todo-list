export interface FiltersTypes {
  label: string
  onClose: () => void
  // TODO: add filters types
}

export interface FiltersBarTypes {
  filters?: FiltersTypes[]
}
