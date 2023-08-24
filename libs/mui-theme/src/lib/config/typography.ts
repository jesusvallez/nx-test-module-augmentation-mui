import { type ThemeOptions } from '@mui/material'

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'sans-serif',
]

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
}

const typography: ThemeOptions['typography'] = {
  fontFamily: systemFonts.join(', '),
  fontSize: 16,
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.normal,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.bold,
}

export default typography
