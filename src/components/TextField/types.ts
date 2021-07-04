export interface TextFieldTypes {
  placeholder?: string
  onChange: () => void
  label?: string
  value?: string | null
  fullWidth?: boolean
  name?: string
  required?: boolean
  multiline?: boolean
  type?: string
}
