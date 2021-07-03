import theme from '../../constants/theme'

const getColor = (color) => {
  if (color) {
    return theme.colors[color] || theme.colors.primaryColor
  }

  return theme.colors.primaryColor
}

export default getColor
