import TaskService from '.'

describe('TaskService', () => {
  test('should create task model correctly', () => {
    const setItemMock = jest.fn()
    Storage.prototype.setItem = setItemMock

    const task = {
      status: 'Doing',
      priority: 'Low',
      dueDate: 'dummy dueDate',
      description: 'dummy description',
      title: 'dummy title'
    }

    TaskService.create(task)

    expect(setItemMock).toHaveBeenCalled()
  })

  test('should throw error when creation model validation fail', () => {
    const task = {
      status: 'INVALID STATUS',
      priority: 'dummy priority',
      dueDate: 'dummy dueDate',
      description: 'dummy description',
      title: 'dummy title'
    }

    try {
      TaskService.create(task)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Error: Model error: Status is not valid')
    }
  })

  test('should update task correctly', () => {
    const getItemMock = jest.fn(() => JSON.stringify([{ id: 1 }]))
    const setItemMock = jest.fn()

    Storage.prototype.getItem = getItemMock
    Storage.prototype.setItem = setItemMock

    const task = {
      id: 1,
      status: 'Doing',
      priority: 'Low',
      dueDate: 'dummy dueDate',
      description: 'dummy description',
      title: 'dummy title'
    }

    TaskService.update(task)

    expect(setItemMock).toHaveBeenCalled()
  })

  test('should throw error when update model validation fail', () => {
    const task = {
      status: 'INVALID STATUS',
      priority: 'dummy priority',
      dueDate: 'dummy dueDate',
      description: 'dummy description',
      title: 'dummy title'
    }

    try {
      TaskService.update(task)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Error: Model error: Status is not valid')
    }
  })

  test('should delete task correctly', () => {
    const getItemMock = jest.fn(() => JSON.stringify({ id: 1 }))
    const setItemMock = jest.fn()

    Storage.prototype.setItem = setItemMock
    Storage.prototype.getItem = getItemMock

    TaskService.delete(1)

    expect(getItemMock).toHaveBeenCalled()
    expect(setItemMock).toHaveBeenCalled()
  })

  test('should filter tasks with filters', () => {
    const testValues = [
      { status: 'To do', priority: 'Low', title: 'dummy title 1', dueDate: null, expected: 1 },
      { status: 'Doing', priority: 'High', title: 'dummy title 2', dueDate: null, expected: 1 },
      { status: 'Done', priority: 'Medium', title: 'dummy title 3', dueDate: null, expected: 1 },
      { status: 'Done', priority: 'Medium', title: 'dummy title 4', dueDate: '2021-07-04', expected: 1 },
      { status: null, priority: null, title: null, dueDate: null, expected: 4 }
    ]

    testValues.forEach(test => {
      const getItemMock = jest.fn(() => JSON.stringify([
        {
          id: 1,
          status: 'To do',
          priority: 'Low',
          dueDate: null,
          description: 'dummy description',
          title: 'dummy title 1'
        },
        {
          id: 2,
          status: 'Doing',
          priority: 'High',
          dueDate: null,
          description: 'dummy description',
          title: 'dummy title 2'
        },
        {
          id: 3,
          status: 'Done',
          priority: 'Medium',
          dueDate: null,
          description: 'dummy description',
          title: 'dummy title 3'
        },
        {
          id: 4,
          status: 'Done',
          priority: 'Medium',
          dueDate: '2021-07-04',
          description: 'dummy description',
          title: 'dummy title 4'
        }
      ]))

      Storage.prototype.getItem = getItemMock

      const mockFilters = {
        status: test.status,
        priority: test.priority,
        title: test.title,
        dueDate: test.dueDate
      }

      const tasks = TaskService.filter(mockFilters)

      expect(tasks).toHaveLength(test.expected)
      expect(getItemMock).toHaveBeenCalled()
    })
  })
})
