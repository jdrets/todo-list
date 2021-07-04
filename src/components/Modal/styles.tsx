import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

export const Container = styled.div`
  background-color: white;
  height: 100vh;
  padding: 24px;
  position: relative;
  width: 100%;
  
  @media (min-width: ${theme.layout.breakpoints.medium}) {
    border-radius: 12px;
    height: auto;
    min-width: 350px;
    width: auto;
  }
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`

export const Title = styled.h2`
  color: ${theme.colors.primaryColor};
  font-size: 24px;
`

export const CloseIconWrapper = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  svg {
    align-items: center;
    display: flex;
    fill: ${theme.colors.gray};
    height: 40px;
    width: 40px;
  }
`
