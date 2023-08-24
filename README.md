# nx-test-module-augmentation-mui

This project is generated to test the functioning of the nx module augmentation. It doesn't seem to work properly because when the mui theme is augmented, it is not applied correctly in the next project.

# Steps to reproduce

## Developer Experience

Go to `apps/next-app-mui/components/Headers/BHeader.tsx`

this component is using primary.main from the theme

```jsx
    <HeaderWrapper
      ...
      sx={{ backgroundColor: 'primary.dark' }}
      // sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
    >
    ...
    </HeaderWrapper>
```

If you uncomment the sx line and comment the sx line above, the theme is applied correctly.

but if you open this component `apps/next-app-mui/components/Headers/AHeader.tsx`

```jsx
    <HeaderWrapper
      ...
      sx={{ backgroundColor: 'neutral.dark' }}
      // sx={{ backgroundColor: (theme) => theme.palette.neutral.dark }}
    >
    ...
    </HeaderWrapper>
```

and you uncomment the sx line and comment the sx line above, the theme is not applied correctly. Typescipt throws an error.

## Serve

> nx serve next-app-mui

Works fine with both components and corresponding theme colors defined at `libs/mui-theme/src/lib/config/palette.ts`.

```
sx={{ backgroundColor: 'primary.dark' }}
```

```
sx={{ backgroundColor: 'neutral.dark' }}
```

## Build

> nx build mui-theme

```
vite v4.3.9 building for production...

✓ 226 modules transformed.
../../dist/libs/mui-theme/index.mjs  66.89 kB │ gzip: 19.22 kB
../../dist/libs/mui-theme/index.js  45.88 kB │ gzip: 15.86 kB

[vite:dts] Start generate declaration files...
✓ built in 2.78s
[vite:dts] Declaration files built in 2288ms.
```

> nx build next-app-mui

```
✔    1/1 dependent project tasks succeeded [0 read from cache]

   Hint: you can run the command with --verbose to see the full dependent project outputs

 ———————————————————————————————————————————————————————————————————————————

> nx run next-app-mui:build:production

- info Creating an optimized production build...
- info Compiled successfully
- info Skipping linting
- info Checking validity of types...
Failed to compile.

../../libs/mui-theme/src/lib/config/palette.ts:29:3

Type error: Type '{ primary: { main: string; light: string; dark: string; }; neutral: { main: string; light: string; dark: string; contrastText: string; }; colors: { red: Partial<Color>; blue: Partial<Color>; green: Partial<...>; }; }' is not assignable to type 'PaletteOptions'.

Object literal may only specify known properties, and 'neutral' does not exist in type 'PaletteOptions'.

  27 |     dark: '#062210',
  28 |   },
> 29 |   neutral: {
     |   ^
  30 |     main: '#500050',
  31 |     light: '#a000a0',
  32 |     dark: '#380038',

```
