'use client'

import { Typography } from '@mui/material'
import HeaderWrapper from './HeaderWrapper'

export default function AHeader() {
  return (
    <HeaderWrapper
      position="sticky"
      elevation={3}
      minSize={[40, 40]}
      size={['100%', '100%']}
      sx={{ backgroundColor: (theme) => theme.palette.neutral.dark }}
    >
      <Typography component="p" color="neutral.contrastText" justifyContent="center" textAlign="center" flex={1}>
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
