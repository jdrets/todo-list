import theme from '../../constants/theme'
import TASK_CONSTANTS from '../../constants/task'
import getPriorityColor from '.'

describe('getPriorityColor', () => {
  test('Should return expected color for priority', () => {
    const tests = [
      {
        priority: TASK_CONSTANTS.PRIORITY.HIGH,
        expectedColor: theme.colors.red
      },
      {
        priority: TASK_CONSTANTS.PRIORITY.LOW,
        expectedColor: theme.colors.green
      },
      {
        priority: TASK_CONSTANTS.PRIORITY.MEDIUM,
        expectedColor: theme.colors.yellow
      }
    ]

    tests.forEach(test => {
      const color = getPriorityColor(test.priority)
      const expectedColor = test.expectedColor
      expect(color).toBe(expectedColor)
    })
  })

  test('Should return primary color for invalid priority', () => {
    const tests = ['car', 'airplane', 'invalid_status']

    tests.forEach(invalidValue => {
      const color = getPriorityColor(invalidValue)
      const expectedColor = theme.colors.primaryColor
      expect(color).toBe(expectedColor)
    })
  })
})
