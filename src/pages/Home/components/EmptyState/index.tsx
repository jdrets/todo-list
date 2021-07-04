import React, { useContext } from 'react'

import FeedbackState from '../../../../components/FeedbackState'
import Button from '../../../../components/Button'
import Illustration from './components/Illustration'
import { PageContext } from '../../../../components/AppContextProvider'

const EmptyState = () => {
  const { setNewTaskModal } = useContext(PageContext)

  const handleButtonClick = () => {
    setNewTaskModal(true)
  }

  return (
    <FeedbackState
      illustration={<Illustration />}
      title="Oh, task list is empty"
      button={
        <Button
          onClick={handleButtonClick}
        >
          Create task
        </Button>
      }
    />
  )
}

export default EmptyState
