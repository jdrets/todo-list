import React, { useContext } from 'react'

import PageWrapper from '../../components/PageWrapper'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import AddTaskModal from './components/AddTaskModal'

const HomePage = () => {
  const { tasks, setNewTaskModal, newTaskModal } = useContext(PageContext)

  const closeNewTaskModal = () => {
    setNewTaskModal(false)
  }

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
        open={newTaskModal}
        onClose={closeNewTaskModal}
      />
    </PageWrapper>
  )
}

export default HomePage
