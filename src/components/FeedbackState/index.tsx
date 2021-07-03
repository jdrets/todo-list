import React, { FunctionComponent } from 'react'

import { FeedbackStateTypes } from './types'
import {
  Wrapper,
  IllustrationWrapper,
  TitleWrapper,
  Container
} from './styles'

const FeedbackState: FunctionComponent<FeedbackStateTypes> = ({
  illustration,
  title,
  button
}) => {
  return (
    <Wrapper>
      <Container>
        <IllustrationWrapper>{illustration}</IllustrationWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        {button && button}
      </Container>
    </Wrapper>
  )
}

export default FeedbackState
