import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.primaryColor};
  border-radius: 24px;
  color: white;
  cursor: pointer;
  display: inline-block;
  margin: 0 4px 4px 0;
  padding: 6px;
  transition: 0.3s;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Label = styled.div`
  font-size: 10px;
  font-weight: 500;
  padding: 0 8px;
`

export const CloseButton = styled.div`
  background-color: ${theme.colors.primaryColorDark};
  border-radius: 24px;
  font-size: 10px;
  
  svg {
    align-items: center;
    display: flex;
    fill: white;  
    height: 14px;
    width: 14px;
  }
  
  &:hover {
    background-color: ${theme.colors.primaryColor};
  }
`
