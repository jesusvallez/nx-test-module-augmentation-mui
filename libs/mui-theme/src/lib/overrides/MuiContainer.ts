import { Components } from '@mui/material'

import { type ThemeOverride } from '../theme'

const MuiContainer: Components<ThemeOverride>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) =>
      theme.unstable_sx({
        px: {
          xs: 4,
          sm: 4,
        },
      }),
  },
}

export default MuiContainer
