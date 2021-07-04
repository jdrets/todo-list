import React, { useContext, useState } from 'react'

import PageWrapper from '../../components/PageWrapper'
import withSnackbar from '../../components/withSnackbar'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import UpdateTaskModal from './components/UpdateTaskModal'
import AddTaskModal from './components/AddTaskModal'

const HomePage = ({ showSnackbar }) => {
  const [showUpdateModal, setShopUpdateModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState({
    title: 'dummy text',
    status: 'Doing',
    priority: 'Low',
    description: 'asdasdas'
  })
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
      <UpdateTaskModal
        open={showUpdateModal}
        onClose={closeNewTaskModal}
        showSnackbar={showSnackbar}
        selectedTask={selectedTask}
      />
    </PageWrapper>
  )
}

export default withSnackbar(HomePage)
