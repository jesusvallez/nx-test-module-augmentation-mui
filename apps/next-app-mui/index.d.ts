/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

// import { type ColorPartial } from '@mui/material/styles/createPalette'
// import { type Color } from '@mui/material'
// import { type PaletteColor } from '@mui/material'
// import { type PaletteColorOptions } from '@mui/material'
// import { type ZIndex as ZIndexMUI } from '@mui/material/styles'

// import { type Color, type ColorPartial } from '@mui/material'

// declare module '@mui/material/styles/zIndex' {
//   interface ZIndex extends ZIndexMUI {
//     component: number
//     header: number
//     autocomplete: number
//   }
// }

// declare module '@mui/material/styles' {
//   interface Palette {
//     neutral: PaletteColor
//     colors: {
//       red: Color
//       blue: Color
//       green: Color
//     }
//   }

//   interface PaletteOptions {
//     neutral?: PaletteColorOptions
//     colors?: {
//       red: ColorPartial
//       blue: ColorPartial
//       green: ColorPartial
//     }
//   }
// }
