import React, { FunctionComponent, useContext } from 'react'
import uuid from 'react-uuid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import FilterEmptyState from '../../components/FilterEmptyState'
import TaskCard from './components/TaskCard'
import { TasksListTypes } from './types'
import { Wrapper } from './styles'
import TaskService from '../../../../services/taskService'
import { PageContext } from '../../../../components/AppContextProvider'

const TasksList: FunctionComponent<TasksListTypes> = ({ tasks, setSelectedTask, filters }) => {
  const filterTasks = () => TaskService.filter(filters)
  const currentTasks = filters ? filterTasks() : tasks
  const { updateContextTasks } = useContext(PageContext)

  const reorderTasks = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const items = reorderTasks(
      tasks,
      result.source.index,
      result.destination.index
    )

    TaskService.updateTasks(items)
    updateContextTasks()
  }

  return (
    (currentTasks.length > 0)
      ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <Wrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
                data-testid="droppable-zone"
              >
                {currentTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id?.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        data-testid={`draggable-card-${task.id}`}
                      >
                        <TaskCard
                          isDragging={snapshot.isDragging}
                          key={uuid()}
                          task={task}
                          setSelectedTask={setSelectedTask}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Wrapper>
            )}
          </Droppable>
        </DragDropContext>
        )
      : <FilterEmptyState />
  )
}

export default TasksList
