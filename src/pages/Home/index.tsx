import React, { useContext } from 'react'

import PageWrapper from '../../components/PageWrapper'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'

const HomePage = () => {
  const { tasks } = useContext(PageContext)

  return (
    <PageWrapper>
      {
        tasks.length > 0
          ? <>
              <FiltersBar />
              <TasksList tasks={tasks} />
            </>
          : <EmptyState />
      }
      <EmptyState />
    </PageWrapper>
  )
}

export default HomePage
