import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.header`
  background-color: white;
  border-radius: 60px;
  margin-top: -60px;
  min-height: 200px;
  padding: 32px;

  @media (min-width: ${theme.layout.breakpoints.medium}) {
    border-radius: 0;
    margin-top: 0;
  }
`

export default Wrapper
