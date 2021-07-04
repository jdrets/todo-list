import Task from './Task'

class TaskService {
  static create ({ title, description, status, priority, dueDate }) {
    try {
      const newTask = new Task(title, description, status, priority, dueDate)
      const tasks = JSON.parse(localStorage.getItem('tasks')) || []

      tasks.push(newTask)

      localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default TaskService
