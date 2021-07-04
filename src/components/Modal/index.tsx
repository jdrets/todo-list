import React, { FunctionComponent } from 'react'
import { Close as CloseIcon } from 'react-ionicons'

import {
  Wrapper,
  Container,
  Header,
  Title,
  CloseIconWrapper
} from './styles'
import { ModalTypes } from './types'

const Modal: FunctionComponent<ModalTypes> = ({
  children,
  title,
  open,
  onClose
}) => (
  open && <Wrapper>
    <Container>
      <Header>
        <Title>{title}</Title>
        <CloseIconWrapper onClick={onClose} data-testid="modal-close-button">
          <CloseIcon />
        </CloseIconWrapper>
      </Header>
      {children}
    </Container>
  </Wrapper>
)

export default Modal
