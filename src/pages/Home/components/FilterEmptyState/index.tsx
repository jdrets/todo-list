import React from 'react'

import FeedbackState from '../../../../components/FeedbackState'
import Illustration from './components/Illustration'

const FilterEmptyState = () => (
  <FeedbackState
    illustration={<Illustration />}
    title="I have not found any result. Try with other filters"
  />
)

export default FilterEmptyState
