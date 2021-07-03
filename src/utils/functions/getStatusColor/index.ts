import theme from '../../constants/theme'
import TASK_CONSTANTS from '../../constants/task'

const getStatusColor = (status) => {
  if (status === TASK_CONSTANTS.STATUS.TODO) {
    return theme.colors.primaryColor
  } else if (status === TASK_CONSTANTS.STATUS.DOING) {
    return theme.colors.yellow
  } else if (status === TASK_CONSTANTS.STATUS.DONE) {
    return theme.colors.green
  } else {
    return theme.colors.primaryColor
  }
}

export default getStatusColor
