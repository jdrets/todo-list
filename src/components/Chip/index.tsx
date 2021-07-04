import React, { FunctionComponent } from 'react'
import { Close } from 'react-ionicons'

import { ChipTypes } from './types'
import {
  Wrapper,
  Container,
  Label,
  CloseButton
} from './styles'

const Chip: FunctionComponent<ChipTypes> = ({
  deleteFilter,
  filter
}) => {
  const handleClose = () => {
    deleteFilter(filter[0])
  }

  return (
    filter[1] && <Wrapper>
      <Container>
        <Label>{filter[0]}: {filter[1]}</Label>
        <CloseButton onClick={handleClose} data-testid="chip-close-button">
          <Close/>
        </CloseButton>
      </Container>
    </Wrapper>
  )
}

export default Chip
