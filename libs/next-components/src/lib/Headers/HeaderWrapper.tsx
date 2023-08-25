import { ComponentProps, PropsWithChildren } from 'react'

import { AppBar, Toolbar } from '@mui/material'

import { Property } from 'csstype'

type size = number | string

interface Props {
  minSize?: [size, size]
  size?: [size, size]
  dataTestClass?: string
  backgroundColor?: Property.BackgroundColor | undefined
}

const PrimaryHeaderWrapper = ({
  elevation = 0,
  dataTestClass,
  position = 'static',
  minSize,
  size = [50, 75],
  backgroundColor,
  children,
  ...rest
}: PropsWithChildren<ComponentProps<typeof AppBar>> & Props) => {
  const [minSizeMobile, minSizeDesktop] = minSize ?? size
  const [sizeMobile, sizeDesktop] = size

  return (
    <AppBar data-testclass={dataTestClass} position={position} elevation={elevation} {...rest}>
      <Toolbar
        disableGutters
        sx={{
          backgroundColor,
          minHeight: { xs: minSizeMobile, md: minSizeDesktop },
          height: { xs: sizeMobile, md: sizeDesktop },
          px: { xs: 4, md: 12 },
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default PrimaryHeaderWrapper
