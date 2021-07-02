import React from 'react'

import {
  HeaderWrapper,
  DateLabel,
  Container,
  DataWrapper,
  Title,
  TasksCountLabel,
  ButtonWrapper
} from './styles'

const Header = () => {
  const handleClickButton = () => {
    console.log('click')
  }

  return (
    <HeaderWrapper>
      <DateLabel>8 Jan</DateLabel>
      <Container>
        <DataWrapper>
          <Title>To do list</Title>
          <TasksCountLabel>0 tasks</TasksCountLabel>
        </DataWrapper>
        <ButtonWrapper>
          <div onClick={handleClickButton}>Add new</div>
        </ButtonWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
