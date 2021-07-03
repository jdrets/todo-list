import React from 'react'
import { useHistory } from 'react-router-dom'

import PageWrapper from '../../components/PageWrapper'
import FeedbackState from '../../components/FeedbackState'
import Button from '../../components/Button'
import Illustration from './components/Illustration'

const NotFoundPage = () => {
  const history = useHistory()

  const handleButtonClick = () => {
    history.push('/')
  }

  return (
    <PageWrapper>
      <FeedbackState
        illustration={<Illustration />}
        title="Oh, this page does not exist"
        button={
          <Button
            onClick={handleButtonClick}
          >
            Go to home
          </Button>
        }
      />
    </PageWrapper>
  )
}

export default NotFoundPage
