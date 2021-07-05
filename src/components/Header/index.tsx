import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import getCurrentDate from '../../utils/functions/getCurrentDate'
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
  const [showButton, setShowButton] = useState(false)
  const { tasks, setShowCreateTaskModal } = useContext(PageContext)
  const location = useLocation()
  const todayDate = getCurrentDate()

  useEffect(() => {
    if (location.pathname === '/') {
      setShowButton(true)
    }
  }, [location])

  const handleClickButton = () => {
    setShowCreateTaskModal(true)
  }

  return (
    <HeaderWrapper>
      <DateLabel>{todayDate}</DateLabel>
      <Container>
        <DataWrapper>
          <Title>To do list</Title>
          <TasksCountLabel>{tasks.length} tasks</TasksCountLabel>
        </DataWrapper>
        {
          showButton && <ButtonWrapper>
             <Button
                onClick={handleClickButton}
                variant="white"
              >
                Add new
              </Button>
          </ButtonWrapper>
        }
      </Container>
    </HeaderWrapper>
  )
}

export default Header
