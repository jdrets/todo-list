import styled from 'styled-components'

import theme from '../../utils/constants/theme'

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const TitleWrapper = styled.div`
  color: ${theme.colors.gray};
  font-size: 24px;
  font-weight: 500;
  padding: 18px 0 24px;
  text-align: center;
`

export const IllustrationWrapper = styled.div`
  fill: ${theme.colors.gray};
  width: 138px;
`
