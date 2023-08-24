import { type Breakpoint } from '@mui/material'
import { createBreakpoints } from '@mui/system'

export const breakpointsValues: { [key in Breakpoint]: number } = {
  xs: 0,
  sm: 368,
  md: 640,
  lg: 976,
  xl: 1272,
}

const breakpoints = createBreakpoints({
  values: breakpointsValues,
})

export default breakpoints
