import Task from './Task'

describe('Task', () => {
  test('should instantiate correctly Task model', () => {
    const task = new Task(
      1,
      1,
      'title dummy',
      'dummy desc',
      'To do',
      'Low',
      null
    )

    expect(task).toBeInstanceOf(Task)
  })

  test('should throw error when no-nulleable fields they are null', () => {
    const testValues = [
      { id: 1, orderId: 1, title: null, description: 'dummy', status: 'Doing', priority: 'High', dueDate: null },
      { id: 1, orderId: 2, title: 'title', description: null, status: 'Doing', priority: 'High', dueDate: null },
      { id: 1, orderId: 3, title: 'title', description: 'dummy', status: null, priority: 'High', dueDate: null },
      { id: 1, orderId: 3, title: 'title', description: 'dummy', status: 'Doing', priority: null, dueDate: null }
    ]

    testValues.forEach(test => {
      try {
        // eslint-disable-next-line no-new
        new Task(
          test.id,
          test.orderId,
          test.title,
          test.description,
          test.status,
          test.priority,
          test.dueDate
        )
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'Could not create model: Missing non-nullable fields')
      }
    })
  })

  test('should throw error when status is invalid', () => {
    try {
      // eslint-disable-next-line no-new
      new Task(
        1,
        1,
        'title dummy',
        'dummy desc',
        'INVALID STATUS',
        'Low',
        null
      )
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Model error: Status is not valid')
    }
  })

  test('should throw error when priority is invalid', () => {
    try {
      // eslint-disable-next-line no-new
      new Task(
        1,
        1,
        'title dummy',
        'dummy desc',
        'To do',
        'INVALID PRIORITY',
        null
      )
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Model error: Priority is not valid')
    }
  })
})
