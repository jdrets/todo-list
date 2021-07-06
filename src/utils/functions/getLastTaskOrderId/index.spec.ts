import getLastTaskOrderId from '.'

describe('getLastTaskOrderId', () => {
  test('Should return the last task orderId', () => {
    const tasks = [
      { id: 1, orderId: 1, title: 'task 1' },
      { id: 2, orderId: 2, title: 'task 2' },
      { id: 3, orderId: 3, title: 'task 3' }
    ]

    const lastOrderId = getLastTaskOrderId(tasks)

    expect(lastOrderId).toBe(3)
  })

  test('Should return 0 when no tasks', () => {
    const tasks = []

    const lastId = getLastTaskOrderId(tasks)

    expect(lastId).toBe(0)
  })

  test('Should return 0 when task no have orderId', () => {
    const tasks = [{ title: 'dummy title' }]

    const lastId = getLastTaskOrderId(tasks)

    expect(lastId).toBe(0)
  })
})
