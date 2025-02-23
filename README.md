# Material Compact

Helper to create compact `@mui/material` (material-ui) theme

- Components are more compact in size
- `Button`, `TextField`, `Autocomplete` and `Select` share same height
- `TextField`, `Autocomplete` and `Select` support large size
- `Button` text are not forced uppper-case anymore

## Install

```bash
npm install --save material-compact
```

## Usage

```jsx
import { Button, Stack, TextField, ThemeProvider } from '@mui/material';
import { createCompactTheme } from 'material-compact';

const theme = createCompactTheme({
  // Your theme options...
});

render(
  <ThemeProvider theme={theme}>
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <TextField size="small" label="Small" />
        <Button variant="contained" size="small">Button</Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <TextField size="medium" label="Medium" />
        <Button variant="contained" size="medium">Button</Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <TextField size="large" label="Large" />
        <Button variant="contained" size="large">Button</Button>
      </Stack>
    </Stack>
  </ThemeProvider>
);
```

If you are using TypeScript, modify your `tsconfig.json` to enable extra size variants:

```json
{
  "compilerOptions": {
    "types": ["material-compact/overrides"]
  }
}
```

## Comparison

```jsx
import { Button, createTheme, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import { createCompactTheme } from 'material-compact';

const compactTheme = createCompactTheme({
  // Your theme options...
});

const normalTheme = createTheme({
  // Your theme options...
});

render(
  <Stack direction="row" spacing={4}>
    <ThemeProvider theme={compactTheme}>
      <Stack spacing={2}>
        <Typography variant="h3">Compact Theme</Typography>
        <Stack direction="row" spacing={1}>
          <TextField size="small" label="Small" />
          <Button variant="contained" size="small">Button</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField size="medium" label="Medium" />
          <Button variant="contained" size="medium">Button</Button>
        </Stack>
      </Stack>
    </ThemeProvider>
    <ThemeProvider theme={normalTheme}>
      <Stack spacing={2}>
        <Typography variant="h3">Normal Theme</Typography>
        <Stack direction="row" spacing={1}>
          <TextField size="small" label="Small" />
          <Button variant="contained" size="small">Button</Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField size="medium" label="Medium" />
          <Button variant="contained" size="medium">Button</Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  </Stack>
);
```

👉 [check online preview](https://guoyunhe.github.io/material-compact/)
