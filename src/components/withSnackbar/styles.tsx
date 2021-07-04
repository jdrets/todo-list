import styled from 'styled-components'
import theme from '../../utils/constants/theme'

export const SnackbarWrapper = styled.div<any>`
  .Toastify__toast {
    border-radius: 32px;
    margin: 24px;
    min-height: 55px;
  }
  
  .Toastify__toast--error {
    background-color: ${theme.colors.red};
  }
  
  .Toastify__toast--success {
    background-color: ${theme.colors.green};
  }
`
