import React, { FunctionComponent, useEffect, useState } from 'react'
import { withFieldsModalTypes } from './types'

const withFieldsModal = (Modal) => {
  const ModalComponent: FunctionComponent<withFieldsModalTypes> = props => {
    const [fetching, setFetching] = useState(false)
    const [fields, setFields] = useState(props.selectedTask || {
      title: null,
      status: null,
      priority: null,
      description: null,
      dueDate: null
    })

    useEffect(() => {
      setFields(props.selectedTask)
    }, [props.selectedTask])

    const handleChangeField = ({ target: { value, name } }) => {
      setFields({
        ...fields,
        [name]: value
      })
    }

    const isButtonDisabled = () => {
      return !fields?.status || !fields?.priority || !fields?.description || !fields?.title || fetching
    }

    const handleCancel = () => {
      setFields(null)
      props.onClose()
    }

    return (
      <Modal
        {...props}
        fields={fields}
        handleChangeField={handleChangeField}
        fetching={fetching}
        setFetching={setFetching}
        isButtonDisabled={isButtonDisabled}
        handleCancel={handleCancel}
      />
    )
  }

  return ModalComponent
}

export default withFieldsModal
