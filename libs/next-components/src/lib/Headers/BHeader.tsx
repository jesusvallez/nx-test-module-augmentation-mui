'use client'

import { Typography } from '@mui/material'
import HeaderWrapper from './HeaderWrapper'

export default function BHeader() {
  return (
    <HeaderWrapper
      position="sticky"
      elevation={0}
      minSize={[40, 40]}
      size={['100%', '100%']}
      // sx={{ backgroundColor: 'primary.dark' }}
      sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}
    >
      <Typography component="span" pr={5} variant="caption" color="white" justifyContent="center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, asperiores.
      </Typography>
    </HeaderWrapper>
  )
}
