import { ReactElement } from 'react'

export interface ButtonTypes {
  onClick?: () => void
  variant?: string
  hierarchy?: string
  disabled?: boolean
  children: ReactElement | string
}
