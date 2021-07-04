import React, { useContext, useState } from 'react'

import PageWrapper from '../../components/PageWrapper'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import AddTaskModal from './components/AddTaskModal'

const HomePage = () => {
  const [open, setOpen] = useState(true)
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

      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </PageWrapper>
  )
}

export default HomePage
