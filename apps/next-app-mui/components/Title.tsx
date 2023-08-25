'use client'

import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

export default function Title({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h2"
        textAlign="center"
        mb={12}
        fontWeight={700}
        sx={{ color: (theme) => theme.palette.neutral.dark, textDecoration: 'underline', textTransform: 'uppercase' }}
      >
        {children}
      </Typography>
    </Box>
  )
}
