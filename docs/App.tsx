import { Button, TextField, ThemeProvider } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';

const theme = createCompactTheme();

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ marginBottom: 30 }}>
          <TextField label="Email" sx={{ mr: 2 }} required />
          <TextField label="Password" sx={{ mr: 2 }} />
          <Button variant="contained">Submit</Button>
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField size="small" label="Email" sx={{ mr: 2 }} />
          <TextField size="small" label="Password" sx={{ mr: 2 }} />
          <Button size="small" variant="contained">
            Submit
          </Button>
        </div>
      </ThemeProvider>
      <div>
        <div style={{ marginBottom: 30 }}>
          <TextField label="Email" sx={{ mr: 2 }} required />
          <TextField label="Password" sx={{ mr: 2 }} />
          <Button variant="contained">Submit</Button>
        </div>
        <div style={{ marginBottom: 30 }}>
          <TextField size="small" label="Email" sx={{ mr: 2 }} />
          <TextField size="small" label="Password" sx={{ mr: 2 }} />
          <Button size="small" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
