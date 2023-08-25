import { ReactNode } from 'react'
import { Box } from '@mui/material'

import { AHeader, BHeader } from '@nx-monorepo/next-components'
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          <Box sx={{ position: 'sticky' }}>
            <AHeader />
            <BHeader />
          </Box>

          <Box component="main" sx={{ mt: ['48px', '56px', '64px'] }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
