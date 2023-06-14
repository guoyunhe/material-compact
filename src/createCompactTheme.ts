import { createTheme, Theme, ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { rem } from './helpers';

const compactOptions: ThemeOptions = {
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.25rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.75rem',
    },
    h6: {
      fontSize: '0.5rem',
    },
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
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: rem(14),
          lineHeight: 24 / 14,
          padding: '5px 13px',
          textTransform: 'none',
          fontWeight: 'normal',
        },
        sizeSmall: {
          fontSize: rem(14),
          lineHeight: 22 / 14,
          padding: '3px 13px',
        },
        sizeLarge: {
          fontSize: rem(16),
          lineHeight: 26 / 16,
          padding: '7px 21px',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h3',
        },
      },
    },
    MuiOutlinedInput: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            input: {
              fontSize: rem(16),
              lineHeight: 26 / 16,
              padding: '8px 14px',
            },
            '& .MuiOutlinedInput-notchedOutline > legend > span': {
              fontSize: rem(16 * 0.8),
            },
            '&.MuiInputBase-multiline': {
              fontSize: rem(16),
              padding: 0,
              paddingTop: 1,
              paddingBottom: 1,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          verticalAlign: 'middle',
          fontSize: rem(14),
          '&.MuiInputBase-multiline': {
            padding: 0,
          },
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
    MuiAutocomplete: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            input: {
              '&.MuiOutlinedInput-input.MuiInputBase-input': {
                fontSize: rem(16),
                lineHeight: 26 / 16,
                padding: '8px 14px',
              },
            },
            '& .MuiOutlinedInput-notchedOutline > legend > span': {
              fontSize: rem(16 * 0.8),
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          display: 'inline-flex',
          verticalAlign: 'top',
        },
        inputRoot: {
          '&.MuiOutlinedInput-root.MuiInputBase-root': {
            paddingLeft: 0,
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
        input: {
          '&.MuiOutlinedInput-input': {
            padding: '6px 14px',
            lineHeight: 24 / 14,
            height: 'auto',
            '&.MuiInputBase-inputSizeSmall': {
              lineHeight: 22 / 14,
              padding: '4px 14px',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      variants: [
        {
          props: { size: 'large' },
          style: {
            fontSize: rem(16),
            transform: `translate(14px, ${rem(9)}) scale(1)`,
            '&.MuiInputLabel-shrink': {
              fontSize: rem(16),
              transform: `translate(14px, ${rem(-9)}) scale(0.8)`,
            },
          },
        },
      ],
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
          transform: `translate(14px, ${rem(5)}) scale(1)`,
        },
      },
    },
  },
};

export function createCompactTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createTheme(deepmerge(compactOptions, options), ...args);
}
