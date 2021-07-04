import getLastTaskId from '.'

describe('getLastId', () => {
  test('Should return the last task id', () => {
    const tasks = [
      { id: 1, title: 'task 1' },
      { id: 2, title: 'task 2' },
      { id: 3, title: 'task 3' }
    ]

    const lastId = getLastTaskId(tasks)

    expect(lastId).toBe(3)
  })

  test('Should return 0 when no tasks', () => {
    const tasks = []

    const lastId = getLastTaskId(tasks)

    expect(lastId).toBe(0)
  })

  test('Should return 0 when task no have id', () => {
    const tasks = [{ title: 'dummy title' }]

    const lastId = getLastTaskId(tasks)

    expect(lastId).toBe(0)
  })
})
