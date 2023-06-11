import { Speed } from '@mui/icons-material';
import {
  Autocomplete,
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { createCompactTheme } from 'mui-material-compact';
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

const tsconfigCode = `
{
  "compilerOptions": {
    "types": [
      "mui-material-compact/overrides"
    ]
  }
}
`;

const options = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];

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
    <DocContainer maxWidth={1200}>
      <DocHeader title={PACKAGE_NAME + '@' + PACKAGE_VERSION} />
      <p>Helper to create compact @mui/material theme</p>

      <DocHeading>Install</DocHeading>
      <DocCodeBlock language="bash" code={installScript} />

      <DocHeading>Usage</DocHeading>
      <DocCodeBlock language="jsx" code={usageCode} />
      <p>If you are using TypeScript, modify your tsconfig.json to enable extra size variants:</p>
      <DocCodeBlock language="json" code={tsconfigCode} />

      <DocHeading>Preview</DocHeading>

      <DocHeading level={2}>TextField</DocHeading>
      <p>
        In default theme, TextField/Input is much higher than Button (same size value), which makes
        inline form ugly. In compact theme, we give TextField/Input the same height as Button. Also,
        they share the same font weights and font sizes.
      </p>

      <DocHeading level={3}>Small</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <TextField size="small" label="TextField" sx={{ width: '200px', mr: 2 }} />
          <TextField
            size="small"
            label="TextField"
            sx={{ width: '200px', mr: 2 }}
            InputProps={{ startAdornment: <Speed />, endAdornment: 'km/h' }}
          />
          <Autocomplete
            size="small"
            options={options}
            renderInput={(params) => <TextField {...params} size="small" label="Autocomplete" />}
            sx={{ display: 'inline-block', verticalAlign: 'top', width: '200px', mr: 2 }}
          />
          <TextField size="small" label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
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
          <TextField size="small" label="TextField" sx={{ width: '200px', mr: 2 }} />
          <TextField
            size="small"
            label="TextField"
            sx={{ width: '200px', mr: 2 }}
            InputProps={{ startAdornment: <Speed />, endAdornment: 'km/h' }}
          />
          <Autocomplete
            size="small"
            options={options}
            renderInput={(params) => <TextField {...params} size="small" label="Autocomplete" />}
            sx={{ width: '200px', mr: 2 }}
          />
          <TextField size="small" label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
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
          <TextField label="TextField" sx={{ width: '200px', mr: 2 }} />
          <Autocomplete
            options={options}
            renderInput={(params) => <TextField {...params} label="Autocomplete" />}
            sx={{ display: 'inline-block', verticalAlign: 'top', width: '200px', mr: 2 }}
          />
          <TextField label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
          <Button variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button variant="outlined">Reset</Button>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <TextField label="TextField" sx={{ width: '200px', mr: 2 }} />
          <Autocomplete
            options={options}
            renderInput={(params) => <TextField {...params} label="Autocomplete" />}
            sx={{ display: 'inline-block', verticalAlign: 'top', width: '200px', mr: 2 }}
          />
          <TextField label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
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
          <TextField label="TextField" sx={{ width: '200px', mr: 2 }} />
          <Autocomplete
            size="large"
            options={options}
            renderInput={(params) => <TextField {...params} size="large" label="Autocomplete" />}
            sx={{ display: 'inline-block', verticalAlign: 'top', width: '200px', mr: 2 }}
          />
          <TextField label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
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
          <TextField size="large" label="TextField" sx={{ width: '200px', mr: 2 }} />
          <Autocomplete
            size="large"
            options={options}
            renderInput={(params) => <TextField {...params} size="large" label="Autocomplete" />}
            sx={{ display: 'inline-block', verticalAlign: 'top', width: '200px', mr: 2 }}
          />
          <TextField size="large" label="Multiline" multiline sx={{ width: '200px', mr: 2 }} />
          <Button size="large" variant="contained" sx={{ mr: 2 }}>
            Submit
          </Button>
          <Button size="large" variant="outlined">
            Reset
          </Button>
        </ThemeProvider>
      </DocDemoBlock>

      <DocHeading level={2}>Button</DocHeading>

      <DocHeading level={3}>Small</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <Button size="small" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="small" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="small" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="small">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <Button size="small" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="small" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="small" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="small">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>

      <DocHeading level={3}>Medium</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <Button size="medium" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="medium" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="medium" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="medium">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <Button size="medium" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="medium" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="medium" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="medium">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>

      <DocHeading level={3}>Lage</DocHeading>
      <p>Default:</p>
      <DocDemoBlock>
        <ThemeProvider theme={defaultTheme}>
          <Button size="large" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="large" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="large" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="large">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>
      <p>Compact:</p>
      <DocDemoBlock>
        <ThemeProvider theme={compactTheme}>
          <Button size="large" variant="contained" sx={{ mr: 2 }}>
            Contained
          </Button>
          <Button size="large" variant="outlined" sx={{ mr: 2 }}>
            Outlined
          </Button>
          <Button size="large" variant="text" sx={{ mr: 2 }}>
            Text
          </Button>
          <ToggleButtonGroup size="large">
            <ToggleButton value="1">Toggle</ToggleButton>
            <ToggleButton value="2">Button</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </DocDemoBlock>
    </DocContainer>
  );
}
