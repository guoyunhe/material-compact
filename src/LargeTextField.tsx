import { styled, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { rem } from './helpers';

/**
 * Large size variant of TextField
 *
 * @deprecated Use <TextField size="large"/> instead
 */
export const LargeTextField: FC<TextFieldProps> = styled(TextField)<TextFieldProps>({
  '& .MuiOutlinedInput-input': {
    fontSize: rem(16),
    lineHeight: 26 / 16,
    padding: '8px 14px',
  },
  '& .MuiOutlinedInput-notchedOutline > legend > span': {
    fontSize: rem(16 * 0.8),
  },
  '& .MuiInputLabel-root': {
    fontSize: rem(16),
  },
});
