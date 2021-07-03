import theme from '../../constants/theme'
import TASK_CONSTANTS from '../../constants/task'

const getPriorityColor = (priority) => {
  if (priority === TASK_CONSTANTS.PRIORITY.HIGH) {
    return theme.colors.red
  } else if (priority === TASK_CONSTANTS.PRIORITY.LOW) {
    return theme.colors.green
  } else if (priority === TASK_CONSTANTS.PRIORITY.MEDIUM) {
    return theme.colors.yellow
  } else {
    return theme.colors.primaryColor
  }
}

export default getPriorityColor
