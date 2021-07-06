import _ from 'lodash'

const getLastTaskOrderId = (tasks) => {
  return _.maxBy(tasks, task => task.orderId)?.orderId || 0
}

export default getLastTaskOrderId
