import _ from 'lodash'
import Task from './Task'

import TASK_CONSTANTS from '../../utils/constants/task'
import getLastId from '../../utils/functions/getLastTaskId'

class TaskService {
  static create ({ title, description, status, priority, dueDate }) {
    try {
      const tasks = this.get()
      const id = getLastId(tasks) + 1
      const newTask = new Task(id, title, description, status, priority, dueDate)

      tasks.push(newTask)

      localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      throw new Error(error)
    }
  }

  static update (task) {
    const { id, title, description, status, priority, dueDate } = task

    try {
      const updatedTask = new Task(id, title, description, status, priority, dueDate)
      const tasks = this.get()
      const taskIndex = tasks.findIndex(task => task.id === id)
      const updatedTasks = _.clone(tasks)

      updatedTasks[taskIndex] = {
        ...updatedTask
      }

      localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(updatedTasks))
    } catch (error) {
      throw new Error(error)
    }
  }

  static delete (id) {
    try {
      const tasks = this.get()

      _.remove(tasks, task => task.id === id)

      localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      throw new Error(error)
    }
  }

  static get () {
    const tasks = JSON.parse(localStorage.getItem(TASK_CONSTANTS.STORAGE_KEY)) || []
    return _.orderBy(tasks, 'id', 'desc')
  }
}

export default TaskService
