import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { SnackbarWrapper } from './styles'

const withSnackbar = (BaseComponent) => {
  // eslint-disable-next-line react/display-name
  return props => {
    const showSnackbar = (type, message) => {
      toast(message, {
        type: type as any
      })
    }

    return (
      <>
        <BaseComponent {...props} showSnackbar={showSnackbar} />
        <SnackbarWrapper>
          <ToastContainer
            position="bottom-center"
            hideProgressBar
            pauseOnHover={false}
            closeButton={false}
            autoClose={2000}
          />
        </SnackbarWrapper>
      </>
    )
  }
}

export default withSnackbar
