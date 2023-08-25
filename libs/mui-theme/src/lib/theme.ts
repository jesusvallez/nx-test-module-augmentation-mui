import { esES } from '@mui/material/locale'

import { SxProps, ThemeOptions, createTheme } from '@mui/material/styles'
import breakpoints from './config/breakpoints'
import zIndex from './config/zIndex'
import spacing from './config/spacing'
import palette from './config/palette'
import typography from './config/typography'
import MuiContainer from './overrides/MuiContainer'
import MuiTypography from './overrides/MuiTypography'

const themeMUI5: ThemeOptions = {
  palette,
  typography,
  spacing,
  breakpoints,
  zIndex,
  components: {
    MuiContainer,
    MuiTypography,
  },
}

export const theme = createTheme(themeMUI5, esES)
export type ThemeOverride = typeof theme
export type SxStyles = { [key: string]: SxProps<ThemeOverride> }
