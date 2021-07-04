import React, { useContext, useEffect, useState } from 'react'

import PageWrapper from '../../components/PageWrapper'
import withSnackbar from '../../components/withSnackbar'
import { PageContext } from '../../components/AppContextProvider'
import FiltersBar from './components/FiltersBar'
import TasksList from './components/TasksList'
import EmptyState from './components/EmptyState'
import UpdateTaskModal from './components/UpdateTaskModal'
import AddTaskModal from './components/AddTaskModal'
import FiltersModal from './components/FiltersModal'

const HomePage = ({ showSnackbar }) => {
  const [filters, setFilters] = useState(null)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(true)
  const [selectedTask, setSelectedTask] = useState(null)
  const { tasks, setShowCreateTaskModal, showCreateTaskModal } = useContext(PageContext)

  const openFilterModal = () => {
    setShowFiltersModal(true)
  }

  const closeNewTaskModal = () => {
    setShowCreateTaskModal(false)
  }

  const closeUpdateTaskModal = () => {
    setShowUpdateModal(false)
  }

  const closeFiltersTaskModal = () => {
    setShowFiltersModal(false)
  }

  useEffect(() => {
    if (selectedTask) {
      setShowUpdateModal(true)
    }
  }, [selectedTask])

  const applyFilters = (filters) => {
    setFilters(filters)
  }

  return (
    <PageWrapper>
      {
        tasks.length > 0
          ? <>
              <FiltersBar openFilterModal={openFilterModal} filters={filters} setFilters={setFilters} />
              <TasksList
                tasks={tasks}
                setSelectedTask={setSelectedTask}
                filters={filters}
              />
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
      <FiltersModal
        open={showFiltersModal}
        onClose={closeFiltersTaskModal}
        applyFilters={applyFilters}
        filters={filters}
      />
    </PageWrapper>
  )
}

export default withSnackbar(HomePage)
