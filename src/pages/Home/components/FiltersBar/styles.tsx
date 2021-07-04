import styled from 'styled-components'

import theme from '../../../../utils/constants/theme'

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 6px 0 12px;
  position: relative;
  z-index: 2;
`

export const FilterButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  outline: none;
  
  svg {
    align-items: center;
    display: flex;
  }
`

export const FilterButtonLabel = styled.span`
  display: none;
  
  @media (min-width: ${theme.layout.breakpoints.medium}) {
    display: block;
    font-weight: 500;
    margin-left: 6px;
  }
`
