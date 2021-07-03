import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.section`
  background-color: white;
  border-radius: 60px;
  height: calc(100vh - 210px);
  margin-top: -60px;
  padding: 24px;

  @media (min-width: ${theme.layout.breakpoints.medium}) {
    border-radius: 0;
    height: calc(100vh - 150px);
    width: 600px;
    margin: 0 auto
  }
`

export default Wrapper
