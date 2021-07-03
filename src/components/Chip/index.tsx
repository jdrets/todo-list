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
  onClose,
  label
}) => (
  <Wrapper>
    <Container>
      <Label>{label}</Label>
      <CloseButton onClick={onClose} data-testid="chip-close-button">
        <Close />
      </CloseButton>
    </Container>
  </Wrapper>
)

export default Chip
