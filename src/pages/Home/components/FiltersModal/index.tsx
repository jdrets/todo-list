import React, {FunctionComponent, useEffect, useState} from 'react'

import { ButtonsWrapper } from './styles'

import Fields from './components/Fields'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'

const FiltersModal: FunctionComponent<any> = ({
  open,
  onClose,
  applyFilters,
  filters
}) => {
  const [fields, setFields] = useState({})
  // const { updateContextTasks } = useContext(PageContext)

  const handleCancel = () => {
    setFields(null)
    onClose()
  }

  const handleChangeField = ({ target: { value, name } }) => {
    setFields({
      ...fields,
      [name]: value
    })
  }

  const handleConfirm = () => {
    applyFilters(fields)
    handleCancel()
  }

  useEffect(() => {
    setFields(filters)
  }, [filters])

  return (
    <Modal
      title="Filters"
      open={open}
      onClose={handleCancel}
    >
      <Fields fields={fields} handleChangeField={handleChangeField} />
      <ButtonsWrapper>
        <Button
          variant="white"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
        >
          Filter tasks
        </Button>
      </ButtonsWrapper>
    </Modal>
  )
}

export default FiltersModal
