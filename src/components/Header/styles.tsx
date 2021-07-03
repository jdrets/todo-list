import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const HeaderWrapper = styled.header`
  background-color: ${theme.colors.primaryColor};
  color: white;
  height: 210px;
  
  @media (min-width: ${theme.layout.breakpoints.medium}) {
    height: 150px;
  }
`

export const DateLabel = styled.section`
  padding: 24px 0;
  text-align: center;
`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${theme.layout.mobile.padding};
  width: ${theme.layout.mobile.width};

  @media (min-width: ${theme.layout.breakpoints.medium}) {
    margin: 0 auto;
    max-width: ${theme.layout.desktop.width};
  }
`

export const DataWrapper = styled.div`
  text-align: left;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
`

export const TasksCountLabel = styled.h2`
  font-size: 14px;
  font-weight: 500;
`

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
`
