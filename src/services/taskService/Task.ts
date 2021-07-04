import { TaskTypes } from '../../pages/Home/components/TasksList/components/TaskCard/types'

class Task implements TaskTypes {
  description: string;
  priority: string;
  status: string;
  title: string;
  dueDate?: string;

  constructor (title, status, priority, description, dueDate) {
    this.title = title
    this.status = status
    this.priority = priority
    this.description = description
    this.dueDate = dueDate

    this.validate()
  }

  validate () {
    if (!this.status || !this.description || !this.priority || !this.title) {
      throw new Error('Could not create model: Missing non-nullable fields')
    }
  }
}

export default Task
