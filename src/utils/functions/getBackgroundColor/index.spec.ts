import theme from '../../constants/theme'
import getBackgroundColor from '.'

describe('getBackgroundColor', () => {
  test('Should return valid colors', () => {
    const validVariants = ['red', 'purple', 'green', 'yellow', 'white']

    validVariants.forEach(variant => {
      const color = getBackgroundColor(variant)
      const expectedColor = theme.colors[variant]
      expect(color).toBe(expectedColor)
    })
  })

  test('Should return primary color when variant is invalid', () => {
    const invalidVariants = ['car', 'airplane', 'lol']

    invalidVariants.forEach(variant => {
      const color = getBackgroundColor(variant)
      const expectedColor = theme.colors.primaryColor
      expect(color).toBe(expectedColor)
    })
  })

  test('Should return primary color when variant is not defined', () => {
    const variants = [null, undefined]

    variants.forEach(variant => {
      const color = getBackgroundColor(variant)
      const expectedColor = theme.colors.primaryColor
      expect(color).toBe(expectedColor)
    })
  })
})
