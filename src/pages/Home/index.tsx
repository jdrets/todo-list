import React, { useContext } from 'react'

import PageWrapper from '../../components/PageWrapper'
import withSnackbar from '../../components/withSnackbar'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import AddTaskModal from './components/AddTaskModal'

const HomePage = ({ showSnackbar }) => {
  const { tasks, setShowCreateTaskModal, showCreateTaskModal } = useContext(PageContext)

  const closeNewTaskModal = () => {
    setShowCreateTaskModal(false)
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
        open={showCreateTaskModal}
        onClose={closeNewTaskModal}
        showSnackbar={showSnackbar}
      />
    </PageWrapper>
  )
}

export default withSnackbar(HomePage)
