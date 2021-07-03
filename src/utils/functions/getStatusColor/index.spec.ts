import theme from '../../constants/theme'
import getStatusColor from '.'
import TASK_CONSTANTS from '../../constants/task'

describe('getStatusColor', () => {
  test('Should return expected color for status', () => {
    const tests = [
      {
        status: TASK_CONSTANTS.STATUS.TODO,
        expectedColor: theme.colors.primaryColor
      },
      {
        status: TASK_CONSTANTS.STATUS.DOING,
        expectedColor: theme.colors.yellow
      },
      {
        status: TASK_CONSTANTS.STATUS.DONE,
        expectedColor: theme.colors.green
      }
    ]

    tests.forEach(test => {
      const color = getStatusColor(test.status)
      const expectedColor = test.expectedColor
      expect(color).toBe(expectedColor)
    })
  })

  test('Should return primary color for invalid status', () => {
    const tests = ['car', 'airplane', 'invalid_status']

    tests.forEach(invalidValue => {
      const color = getStatusColor(invalidValue)
      const expectedColor = theme.colors.primaryColor
      expect(color).toBe(expectedColor)
    })
  })
})
