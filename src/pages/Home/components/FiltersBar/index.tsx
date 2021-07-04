import React, { FunctionComponent, useEffect, useState } from 'react'
import _ from 'lodash'
import { Filter as FilterIcon } from 'react-ionicons'
import uuid from 'react-uuid'

import { FiltersBarTypes } from './types'
import {
  Wrapper,
  FilterButton,
  FilterButtonLabel
} from './styles'

import Chip from '../../../../components/Chip'

const FiltersBar: FunctionComponent<FiltersBarTypes> = ({
  filters,
  setFilters,
  openFilterModal
}) => {
  const [chips, setChips] = useState([])

  useEffect(() => {
    setChips(_.toPairs(filters))
  }, [filters])

  const deleteFilter = (key) => {
    setFilters({
      ...filters,
      [key]: null
    })
  }

  return (
    <Wrapper>
      <section>
        {
          chips.map(filter => (
            <Chip
              key={uuid()}
              deleteFilter={deleteFilter}
              filter={filter}
            />
          ))
        }
      </section>
      <FilterButton onClick={openFilterModal}>
        <FilterIcon />
        <FilterButtonLabel>Filtros</FilterButtonLabel>
      </FilterButton>
    </Wrapper>
  )
}

export default FiltersBar
