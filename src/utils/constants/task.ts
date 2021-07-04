const TASK_CONSTANTS = {
  STORAGE_KEY: 'tasks',
  PRIORITY: {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low'
  },
  STATUS: {
    TODO: 'To do',
    DOING: 'Doing',
    DONE: 'Done'
  }
}

const AVAILABLE_PRIORITY_LIST = [
  TASK_CONSTANTS.PRIORITY.HIGH,
  TASK_CONSTANTS.PRIORITY.MEDIUM,
  TASK_CONSTANTS.PRIORITY.LOW
]

const AVAILABLE_STATUS_LIST = [
  TASK_CONSTANTS.STATUS.TODO,
  TASK_CONSTANTS.STATUS.DONE,
  TASK_CONSTANTS.STATUS.DOING
]

export default {
  ...TASK_CONSTANTS,
  AVAILABLE_PRIORITY_LIST,
  AVAILABLE_STATUS_LIST
}
