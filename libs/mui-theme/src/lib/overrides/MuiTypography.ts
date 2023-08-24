import { Components } from '@mui/material'

import { type ThemeOverride } from '../theme'

const MuiTypography: Components<ThemeOverride>['MuiTypography'] = {
  styleOverrides: {
    gutterBottom: ({ theme }) =>
      theme.unstable_sx({
        mb: 8,
      }),
  },
}

export default MuiTypography
