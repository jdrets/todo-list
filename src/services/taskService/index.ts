import _ from 'lodash'
import Task from './Task'

import TASK_CONSTANTS from '../../utils/constants/task'
import getLastId from '../../utils/functions/getLastTaskId'
import getLastTaskOrderId from '../../utils/functions/getLastTaskOrderId'

class TaskService {
  static create ({ title, description, status, priority, dueDate }) {
    try {
      const tasks = this.get()
      const id = getLastId(tasks) + 1
      const orderId = getLastTaskOrderId(tasks) + 1
      const newTask = new Task(id, orderId, title, description, status, priority, dueDate)

      tasks.push(newTask)

      localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      throw new Error(error)
    }
  }

  static update (task) {
    const { id, orderId, title, description, status, priority, dueDate } = task

    try {
      const updatedTask = new Task(id, orderId, title, description, status, priority, dueDate)
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
    const tasks = this.get()

    _.remove(tasks, task => task.id === id)

    localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(tasks))
  }

  static get () {
    const tasks = JSON.parse(localStorage.getItem(TASK_CONSTANTS.STORAGE_KEY)) || []
    return _.orderBy(tasks, 'orderId', 'asc')
  }

  static updateTasks (tasks) {
    const updatedTasks = []

    tasks.forEach((task, index) => {
      updatedTasks.push({
        ...task,
        orderId: index + 1
      })
    })

    localStorage.setItem(TASK_CONSTANTS.STORAGE_KEY, JSON.stringify(updatedTasks))
  }

  static filter (filters) {
    const tasks = this.get()

    const filterByTitle = filters.title
      ? tasks.filter(task => task.title?.toLowerCase().indexOf(filters.title?.toLowerCase()) >= 0)
      : tasks

    const filterByStatus = filters.status
      ? filterByTitle.filter(task => task.status === filters.status)
      : filterByTitle

    const filterByPriority = filters.priority
      ? filterByStatus.filter(task => task.priority === filters.priority)
      : filterByStatus

    return filters.dueDate
      ? filterByPriority.filter(task => task.dueDate >= filters.dueDate)
      : filterByPriority
  }
}

export default TaskService
