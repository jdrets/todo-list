import theme from '../../constants/theme'
import getColor from '.'

describe('getColor', () => {
  test('Should return default font color', () => {
    const variants = ['white', 'purpleLight', 'greenLight', 'yellowLight']

    variants.forEach(variant => {
      const color = getColor(variant)
      const expectedColor = theme.colors.primaryColor
      expect(color).toBe(expectedColor)
    })
  })

  test('Should return white font color', () => {
    const variants = ['purple', 'yellow', 'black', 'green', 'red']

    variants.forEach(variant => {
      const color = getColor(variant)
      const expectedColor = theme.colors.white
      expect(color).toBe(expectedColor)
    })
  })
})
