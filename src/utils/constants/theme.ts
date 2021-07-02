const palette = {
  purpleDark: '#4B00BC',
  purple: '#6600FF',
  purpleMedium: '#8533FF',
  purpleLight: '#E3D0FF',
  green: '#59BC6F',
  greenLight: '#E6F5E2',
  red: '#EB5757',
  redLight: '#FCE4E4',
  warning: '#DD9900',
  warningLight: '#FEF1D8',
}

const theme = {
  palette: {
    primaryColor: palette.purple,
    primaryColorMedium: palette.purpleMedium,
    primaryColorLight: palette.purpleLight,
    primaryColorDark: palette.purpleDark,
    ...palette,
  },
}

export default theme
