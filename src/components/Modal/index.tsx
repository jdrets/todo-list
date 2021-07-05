import React, { FunctionComponent, useEffect } from 'react'
import { Close as CloseIcon } from 'react-ionicons'

import {
  Wrapper,
  Container,
  Header,
  Title,
  CloseIconWrapper,
  Backdrop
} from './styles'
import { ModalTypes } from './types'

const Modal: FunctionComponent<ModalTypes> = ({
  children,
  title,
  open,
  onClose
}) => {
  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    })
  }, [open])

  return (
    open && <Wrapper>
      <Backdrop onClick={onClose} />
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
}

export default Modal
