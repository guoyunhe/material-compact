# mui-material-compact

Helper to create compact @mui/material theme

## Install

```bash
npm i mui-material-compact
```

## Usage

```tsx
import { ThemeProvider, TextField } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';

const theme = createCompactTheme({
  // Your theme options...
});

<ThemeProvider theme={theme}>
  <TextField size="small" />
  <TextField size="medium" />
  <TextField size="large" />
</ThemeProvider>;
```

If you are using TypeScript, modify your tsconfig.json to enable extra size variants:

```json
{
  "compilerOptions": {
    "types": ["mui-material-compact/overrides"]
  }
}
```

👉 [check online preview](https://guoyunhe.github.io/mui-material-compact/)
