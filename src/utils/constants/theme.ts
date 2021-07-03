const palette = {
  purpleDark: '#4B00BC',
  purple: '#6600FF',
  purpleMedium: '#8533FF',
  purpleLight: '#E3D0FF',
  green: '#59BC6F',
  greenLight: '#E6F5E2',
  red: '#EB5757',
  redLight: '#FCE4E4',
  yellow: '#DD9900',
  yellowLight: '#FEF1D8',
  white: '#FFFFFF',
  black: '#000000'
}

const theme = {
  colors: {
    primaryColor: palette.purple,
    primaryColorMedium: palette.purpleMedium,
    primaryColorLight: palette.purpleLight,
    primaryColorDark: palette.purpleDark,
    ...palette
  }
}

export default theme
