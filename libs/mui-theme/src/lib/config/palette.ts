import { type ThemeOptions } from '@mui/material'

import { type ColorPartial } from '@mui/material/styles/createPalette'

const red: ColorPartial = {
  300: 'red',
}

const blue: ColorPartial = {
  300: 'blue',
}

const green: ColorPartial = {
  300: 'green',
}

const colors = {
  red,
  blue,
  green,
}

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#188a42',
    light: '#5cd689',
    dark: '#062210',
  },
  neutral: {
    main: '#500050',
    light: '#a000a0',
    dark: '#380038',
    contrastText: '#ffffff',
  },
  colors,
}

export default palette
