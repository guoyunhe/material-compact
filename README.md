# mui-material-compact

## Install

```bash
npm i mui-material-compact
```

## Usage

```tsx
import { ThemeProvider, TextField } from '@mui/material';
import { createCompactTheme, LargeTextField } from 'mui-material-compact';

const theme = createCompactTheme({
  // Your theme options...
});

<ThemeProvider theme={theme}>
  <TextField size="small" />
  <TextField size="medium" />
  {/* @mui/material doesn't provide this size, you can use our component*/}
  <LargeTextField />
</ThemeProvider>;
```

👉 [check online preview](https://guoyunhe.github.io/mui-material-compact/)
