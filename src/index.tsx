import { createTheme, Theme, ThemeOptions } from '@mui/material';
import { recursive } from 'merge';

function rem(px: number) {
  return px / 16 + 'rem';
}

export function createCompactTheme(options?: ThemeOptions, ...args: object[]): Theme {
  const compactOptions: ThemeOptions = {
    typography: {
      fontSize: 14,
      htmlFontSize: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: rem(14),
            lineHeight: 24 / 14,
            padding: '6px 14px',
            textTransform: 'none',
          },
          sizeSmall: {
            fontSize: rem(14),
            lineHeight: 20 / 14,
            padding: '4px 14px',
          },
          outlined: {
            fontWeight: 'normal',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            verticalAlign: 'middle',
            fontSize: rem(14),
          },
          input: {
            padding: '6px 14px',
            lineHeight: 24 / 14,
            height: 'auto',
          },
          inputSizeSmall: {
            lineHeight: 20 / 14,
            padding: '4px 14px',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: rem(14),
            transform: `translate(14px, ${rem(8)}) scale(1)`,
          },
          shrink: {
            transform: `translate(14px, ${rem(-8)}) scale(0.8)`,
          },
          sizeSmall: {
            fontSize: rem(14),
            transform: `translate(14px, ${rem(4)}) scale(1)`,
          },
        },
      },
    },
  };
  recursive(compactOptions, options);
  return createTheme(compactOptions, ...args);
}
