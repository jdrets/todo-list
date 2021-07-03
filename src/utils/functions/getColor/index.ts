import theme from '../../constants/theme'

const exceptionsColors = ['white', 'Light']

const getColor = (color) => {
  const isException = exceptionsColors.find(exceptionColor => color?.includes(exceptionColor))

  return isException ? theme.colors.primaryColor : theme.colors.white
}

export default getColor
