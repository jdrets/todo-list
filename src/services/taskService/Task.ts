import { TaskTypes } from '../../pages/Home/components/TasksList/components/TaskCard/types'
import TASK_CONSTANTS from '../../utils/constants/task'

class Task implements TaskTypes {
  id: number;
  description: string;
  priority: string;
  status: string;
  title: string;
  dueDate?: string;

  constructor (id, title, description, status, priority, dueDate) {
    this.id = id
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

    if (!TASK_CONSTANTS.AVAILABLE_STATUS_LIST.includes(this.status)) {
      throw new Error('Model error: Status is not valid')
    }

    if (!TASK_CONSTANTS.AVAILABLE_PRIORITY_LIST.includes(this.priority)) {
      throw new Error('Model error: Priority is not valid')
    }
  }
}

export default Task
