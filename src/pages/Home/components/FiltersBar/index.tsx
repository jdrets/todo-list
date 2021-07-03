import React, { FunctionComponent } from 'react'
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
  filters = []
}) => {
  return (
    <Wrapper>
      <section>
        {
          filters.map(filter => (
            <Chip
              key={uuid()}
              onClose={() => true}
              label={filter.label}
            />
          ))
        }
      </section>
      <FilterButton>
        <FilterIcon />
        <FilterButtonLabel>Filtros</FilterButtonLabel>
      </FilterButton>
    </Wrapper>
  )
}

export default FiltersBar
