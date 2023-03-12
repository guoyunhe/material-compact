import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { createCompactTheme, LargeTextField } from 'mui-material-compact';
import {
  DocCodeBlock,
  DocContainer,
  DocDemoBlock,
  DocHeader,
  DocHeading,
  useDoc,
} from 'react-doc-ui';

const installScript = 'npm i mui-material-compact';

const usageCode = `
import { ThemeProvider } from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';

const theme = createCompactTheme({
  // Your theme options...
});

<ThemeProvider theme={theme}>
  <YourApp/>
</ThemeProvider>
`;

const largeTextFieldCode = `
import { LargeTextField } from 'mui-material-compact';

<LargeTextField />
`;

export default function App() {
  const { actualTheme } = useDoc();
  const compactTheme = createCompactTheme({
    palette: {
      mode: actualTheme,
    },
  });
  const defaultTheme = createTheme({
    palette: {
      mode: actualTheme,
    },
  });
  return (
    <DocContainer>
      <DocHeader title={PACKAGE_NAME + '@' + PACKAGE_VERSION} />
      <p>Helper to create compact @mui/material theme</p>

      <DocHeading>Install</DocHeading>
      <DocCodeBlock language="bash" code={installScript} />

      <DocHeading>Usage</DocHeading>
      <DocCodeBlock language="jsx" code={usageCode} />

      <DocHeading>Preview</DocHeading>

      <DocHeading level={2}>Button &amp; TextField</DocHeading>
      <p>
        In default theme, TextField/Input is much higher than Button (same size value), which makes
        inline form ugly. In compact theme, we give TextField/Input the same height as Button. Also,
        they share the same font weights and font sizes.
      </p>

      <DocHeading level={3}>Small</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <TextField size="small" label="Email" sx={{ mr: 2 }} />
          <TextField size="small" label="Password" sx={{ mr: 2 }} />
          <Button size="small" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button size="small" variant="outlined">
            Reset
          </Button>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <TextField size="small" label="Email" sx={{ mr: 2 }} />
          <TextField size="small" label="Password" sx={{ mr: 2 }} />
          <Button size="small" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button size="small" variant="outlined">
            Reset
          </Button>
        </ThemeProvider>
      </DocDemoBlock>

      <DocHeading level={3}>Medium</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <TextField label="Email" sx={{ mr: 2 }} />
          <TextField label="Password" sx={{ mr: 2 }} />
          <Button variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button variant="outlined">Reset</Button>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <TextField label="Email" sx={{ mr: 2 }} />
          <TextField label="Password" sx={{ mr: 2 }} />
          <Button variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button variant="outlined">Reset</Button>
        </ThemeProvider>
      </DocDemoBlock>

      <DocHeading level={3}>Large</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <TextField label="Email" sx={{ mr: 2 }} />
          <TextField label="Password" sx={{ mr: 2 }} />
          <Button size="large" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button size="large" variant="outlined">
            Reset
          </Button>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <LargeTextField label="Email" sx={{ mr: 2 }} />
          <LargeTextField label="Password" sx={{ mr: 2 }} />
          <Button size="large" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button size="large" variant="outlined">
            Reset
          </Button>
        </ThemeProvider>
      </DocDemoBlock>
      <p>
        <strong>Note:</strong> @mui/material does not provide large TextField variant. You have to
        import it as a separate component from this package:
      </p>
      <DocCodeBlock language="jsx" code={largeTextFieldCode} />
    </DocContainer>
  );
}
