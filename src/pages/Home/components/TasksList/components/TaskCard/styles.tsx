import styled from 'styled-components'

import theme from '../../../../../../utils/constants/theme'

export const Wrapper = styled.article`
  border-radius: 6px;
  border: 1px solid ${theme.colors.grayLight};
  cursor: pointer;
  padding: 16px;
  transition: border-color 0.3s;
  
  &:hover {
    border-color: ${theme.colors.primaryColorLight};
  }
  
  &:active {
    border-color: ${theme.colors.primaryColor};
  }
`

export const Title = styled.div`
  color: ${theme.colors.primaryColor};
  font-size: 18px;
  font-weight: 500;
  margin-top: 8px;
  
  @media(min-width: ${theme.layout.breakpoints.medium}) {
    font-size: 24px;
    margin-top: 12px;
  }
`

export const Description = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  margin-top: 6px;

  @media(min-width: ${theme.layout.breakpoints.medium}) {
    font-size: 14px;
    line-height: 22px;
  }
`
