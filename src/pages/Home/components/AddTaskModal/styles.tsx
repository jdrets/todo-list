import styled from 'styled-components'
import theme from '../../../../utils/constants/theme'

export const ButtonsWrapper = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 24px;
  position: absolute;
  width: 100%;
  
  @media (min-width: ${theme.layout.breakpoints.medium}) {
    margin-top: 24px;
    padding: 0;
    position: inherit;
  }
`

export const FieldsWrapper = styled.div`
  display: grid;
  gap: 12px;
`
