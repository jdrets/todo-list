import Task from './Task'
import _ from 'lodash'

import TASK_CONSTANTS from '../../utils/constants/task'

class TaskService {
  static create ({ title, description, status, priority, dueDate }) {
    try {
      const newTask = new Task(title, description, status, priority, dueDate)
      const tasks = this.get()

      tasks.push(newTask)

      localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      throw new Error(error)
    }
  }

  static get () {
    const tasks = JSON.parse(localStorage.getItem(TASK_CONSTANTS.STORAGE_KEY)) || []
    return _.reverse(tasks)
  }
}

export default TaskService
