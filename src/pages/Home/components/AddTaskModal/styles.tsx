import styled from 'styled-components'
import theme from '../../../../utils/constants/theme'

export const ButtonsWrapper = styled.div`
  align-items: center;
  background-color: white;
  bottom: 32px;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 24px 0 24px;
  position: absolute;
  width: 100%;
  
  @media (min-width: ${theme.layout.breakpoints.medium}) {
    bottom: 0;
    margin-top: 24px;
    padding: 0;
    position: inherit;
  }
`
