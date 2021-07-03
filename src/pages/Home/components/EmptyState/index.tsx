import React from 'react'

import FeedbackState from '../../../../components/FeedbackState'
import Button from '../../../../components/Button'
import Illustration from './components/Illustration'

const EmptyState = () => {
  const handleButtonClick = () => {
    // TODO: open new task modal
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
