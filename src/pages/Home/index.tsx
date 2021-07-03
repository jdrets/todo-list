import React from 'react'

import PageWrapper from '../../components/PageWrapper'
import TaskCard from './components/TaskCard'

const HomePage = () => {
  return (
    <PageWrapper>
      <TaskCard
        title="Deploy App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie mollis mauris vitae sagittis. Suspendisse dictum turpis lacus, eu sodales nisl commodo et. Donec ultricies dui quis metus facilisis, porta eleifend ante egestas. Cras sed convallis odio. Nam fermentum sit amet velit at consectetur. Cras vitae bibendum justo, eu sagittis nunc. Sed at quam arcu. Sed consectetur at mi a fringilla."
        status="Doing"
        priority="High"
      />
    </PageWrapper>
  )
}

export default HomePage
