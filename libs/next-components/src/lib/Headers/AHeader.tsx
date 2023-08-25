'use client'

import { Typography } from '@mui/material'
import HeaderWrapper from './HeaderWrapper'
import { SxStyles } from '@nx-monorepo/mui-theme'

const classes: SxStyles = {
  typography: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    color: (theme) => theme.palette.neutral.contrastText,
  },
}

export default function AHeader() {
  return (
    <HeaderWrapper
      position="sticky"
      elevation={3}
      minSize={[40, 40]}
      size={['100%', '100%']}
      sx={{ backgroundColor: (theme) => theme.palette.neutral.dark }}
    >
      <Typography component="p" sx={classes.typography}>
        <strong>Lorem ipsum dolor sit amet consectetur.</strong>
        {'  '} Lorem ipsum dolor sit.
        <span role="img" aria-label="ojos">
          {' '}
          👀
        </span>
      </Typography>
    </HeaderWrapper>
  )
}
