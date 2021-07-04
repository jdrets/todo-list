import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.header`
  border-top: 1px solid ${theme.colors.primaryColorLight};
  padding: 12px 24px;
  color: ${theme.colors.gray};
  font-size: 12px;

  @media (min-width: ${theme.layout.breakpoints.medium}) {
    text-align: center;
  }
`
