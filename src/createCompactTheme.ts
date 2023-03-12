import { createTheme, Theme, ThemeOptions } from '@mui/material';
import * as merge from 'deepmerge';
import { rem } from './helpers';

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
          fontWeight: 'normal',
        },
        outlined: {
          padding: '5px 13px',
        },
        sizeSmall: {
          fontSize: rem(14),
          lineHeight: 22 / 14,
          padding: '4px 14px',
        },
        outlinedSizeSmall: {
          padding: '3px 13px',
        },
        sizeLarge: {
          fontSize: rem(16),
          lineHeight: 26 / 16,
          padding: '8px 22px',
        },
        outlinedSizeLarge: {
          padding: '7px 21px',
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
          lineHeight: 22 / 14,
          padding: '4px 14px',
        },
        notchedOutline: {
          '& > legend > span': {
            fontSize: rem(14 * 0.8),
          },
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
          fontSize: rem(14),
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

export function createCompactTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createTheme(merge(compactOptions, options), ...args);
}
