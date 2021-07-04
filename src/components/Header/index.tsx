import React, { useContext } from 'react'

import Button from '../../components/Button'
import { PageContext } from '../AppContextProvider'

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
  const { tasks, setShowCreateTaskModal } = useContext(PageContext)

  const handleClickButton = () => {
    setShowCreateTaskModal(true)
  }

  return (
    <HeaderWrapper>
      <DateLabel>8 Jan</DateLabel>
      <Container>
        <DataWrapper>
          <Title>To do list</Title>
          <TasksCountLabel>{tasks.length} tasks</TasksCountLabel>
        </DataWrapper>
        <ButtonWrapper>
          <Button
            onClick={handleClickButton}
            variant="white"
          >
            Add new
          </Button>
        </ButtonWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
