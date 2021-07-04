import React, {useContext, useEffect, useState} from 'react'

import PageWrapper from '../../components/PageWrapper'
import withSnackbar from '../../components/withSnackbar'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import UpdateTaskModal from './components/UpdateTaskModal'
import AddTaskModal from './components/AddTaskModal'

const HomePage = ({ showSnackbar }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const { tasks, setShowCreateTaskModal, showCreateTaskModal } = useContext(PageContext)

  const closeNewTaskModal = () => {
    setShowCreateTaskModal(false)
  }
  const closeUpdateTaskModal = () => {
    setShowUpdateModal(false)
  }

  useEffect(() => {
    if (selectedTask) {
      setShowUpdateModal(true)
    }
  }, [selectedTask])

  return (
    <PageWrapper>
      {
        tasks.length > 0
          ? <>
              <FiltersBar />
              <TasksList tasks={tasks} setSelectedTask={setSelectedTask} />
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
        onClose={closeUpdateTaskModal}
        showSnackbar={showSnackbar}
        selectedTask={selectedTask}
      />
    </PageWrapper>
  )
}

export default withSnackbar(HomePage)
