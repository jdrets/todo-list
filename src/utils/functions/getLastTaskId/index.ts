import _ from 'lodash'

const getLastTaskId = (tasks) => {
  return _.maxBy(tasks, task => task.id)?.id || 0
}

export default getLastTaskId
